(function(){
angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http){
	var service = this;
	
	service.getAllCategories = function(){
		service.categories = [];
		return  $http({
			method : 'GET',
			url: 'https://davids-restaurant.herokuapp.com/categories.json',

			}).then(function successCallback(response) {
				for (var i=0; response.data.length > i ;i++){
					service.categories.push(response.data[i]);
				}
				return service.categories;
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			   	console.log(response.error);
			});
	}	

	service.getItemsForCategory = function(categoryShortName){	
		return  $http({
			method : 'GET',
			url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName,

		}).then(function successCallback(response) {
			return response.data;
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		   	console.log(response.error);
		});
	}
}
})();