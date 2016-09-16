(function(){

angular.module('lunchChecker',[])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];

function lunchController($scope){

	$scope.list = "" ;

	$scope.check = function (){

		if($scope.list.trim() != ""){
			$scope.textStyle = {"border":"1px solid green"};
			$scope.messageStyle = {"color":"green"};
			if($scope.list.split(",").length < 4){
				$scope.message = "Enjoy!"
			}else{
				$scope.message = "Too much!" 
			}
		}else{
			$scope.textStyle = {"border":"1px solid red"};
			$scope.messageStyle = {"color":"red"};
			$scope.message = "Please enter data first"
		}
	};
};

})();

