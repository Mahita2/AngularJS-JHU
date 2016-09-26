(function(){

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService);


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	
	service.getMatchedMenuItems = function(searchTerm){
		service.found = [];
		return  $http({
			method : 'GET',
			url: 'https://davids-restaurant.herokuapp.com/menu_items.json',

		}).then(function successCallback(response) {
			for (var i=0; response.data.menu_items.length > i ;i++){
				if(response.data.menu_items[i].description.indexOf(searchTerm) !== -1){
					service.found.push(response.data.menu_items[i]);
				}	
			}
			return service.found;
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		   	console.log(response.error);
		});
	}	
	service.removeItem = function (index){
		service.found.splice(index,1);
	}
}

})();
