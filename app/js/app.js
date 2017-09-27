fullpage.initialize("#onepage");


angular.module('Services', [])
.factory('githubService', function($http){

	var runUserRequest = function(link){
		 return $http.get(link);
	};

	return {
		event: function(link){
			return runUserRequest(link);
		}
	}
})

var app = angular.module('App', ['Services']);
app.controller('Controller', function($scope, $timeout, githubService){
	$scope.infotext ={
		text: "",
		value: true
	};
	$scope.search = function() {
		if ($scope.myForm.input.$valid) {
			var link = $scope.link

			githubService.event(link).then(function(data){
				$scope.listitems = data.data;
				if ($scope.listitems.length  == 0) {
					$scope.infotext.text = "Brak wyników";
					$scope.infotext.value = false;
				}else{
					$scope.infotext.text = "";
					$scope.infotext.value = true;	
				}
			}, function(){
				$scope.listitems = null;
				$scope.infotext.text = "Brak odpowiedzi";
				$scope.infotext.value = false;
				console.log('error')	
			});
		}else{
			$scope.listitems = null;
			$scope.infotext.text = "Nieprawidłowy format linku";
			$scope.infotext.value = false;
			console.log('zly link');
		}

	}

})