(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/restaurant/templates/home.template.html',
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/restaurant/templates/categories.template.html',
        controller: 'categoriesController as categoriesCtrl',
        resolve: {
          categories: [
            'MenuDataService',
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })
      .state('item', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/restaurant/templates/items.template.html',
        controller: 'itemsController as itemsCtrl',
        params: {
          categoryShortName: null,
          categoryName: null,
        },
        resolve: {
          items: [
            '$stateParams',
            'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory(
                $stateParams.categoryShortName
              );
            },
          ],
        },
      });
  }
})();
