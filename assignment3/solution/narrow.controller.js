(function(){

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var ctrl = this;

	ctrl.found = [];
	ctrl.searchTerm = '';
	ctrl.search = function(){

		if(ctrl.searchTerm !== ''){
		var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm.toLowerCase());

		promise.then(function(response){
			if(response.length > 0 ){
				ctrl.found = response;
				ctrl.notFound = "";

			}else{
				ctrl.found = [];
				ctrl.notFound = " Nothing Found";
			}
			

		}).catch(function(error){
			console.log('caught some error' + error)
		});
		}else {
			ctrl.found = [];
			ctrl.notFound = " Nothing Found"
		}
		
	}

	ctrl.removeItem = function(index){
		MenuSearchService.removeItem(index);
	}
	
}

})();


