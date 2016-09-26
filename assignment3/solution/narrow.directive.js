(function(){

angular.module('NarrowItDownApp')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
	var ddo = {
		templateUrl : 'loader/itemsloaderindicator.template.html',
		scope :{
			narrow : '<',
			onRemove : '&'
		}
	};
	return ddo;
}

})();

