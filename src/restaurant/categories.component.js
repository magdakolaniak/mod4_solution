(function () {
  'use strict';

  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/restaurant/templates/categories.component.html',
    bindings: {
      categories: '<',
    },
  });
})();
