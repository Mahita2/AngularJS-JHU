(function(){

angular.module('Data')
.controller('CategoryDetailController', CategoryDetailController);


CategoryDetailController.$inject = ['item'];
function CategoryDetailController(item){
	var ctrl = this;
	ctrl.categoryItems = item;
}

})();