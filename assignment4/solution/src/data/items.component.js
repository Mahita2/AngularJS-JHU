(function(){

angular.module('Data')
.component('items', {
	templateUrl : 'templates/category-detail.template.html',
	contoller : 'CategoryDetailController as detailCtrl',
	bindings : {
		categoryItems : '<'
	}
});

})();