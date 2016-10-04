(function(){

angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){

	//redirect home to page if no other URL matches
	$urlRouterProvider.otherwise('/');

	// Set Up UI States
	$stateProvider

	.state('home', {
		url : '/',
		templateUrl : 'templates/home.template.html',
	})

	.state('categories', {
		url : '/categories',
		templateUrl : 'templates/categories.template.html',
		controller : 'CategoriesController as categoriesCtrl',
		resolve: {
			item : ['MenuDataService', function (MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})

	.state('categoryDetail', {
		url : '/items/{category}',
		templateUrl : 'templates/category-detail.template.html',
		controller : 'CategoryDetailController as detailCtrl',
		resolve: {
			item : ['$stateParams','MenuDataService', function ($stateParams,MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.category);			
			}]
		}
	});

}

})();
