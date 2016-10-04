(function(){

angular.module('Data')
.component('categories', {
	templateUrl : 'templates/categories.template.html',
	contoller : 'CategoriesController as categoriesCtrl',
	bindings : {
		categories : '<'
	}
});

})();