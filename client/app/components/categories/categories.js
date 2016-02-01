import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriesComponent from './categories.component';

let categoriesModule = angular.module('categories', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('eggly.categories', {
      url: '/',
      views: {
        //target the ui-view named 'categories' in ROOT state (eggly)
        'categories@': {
          template: `<categories></categories>`
        },
        //target the ui-view named 'bookmarks' in ROOT state (eggly)
        //to show all bookmarks for all categories
        'bookmarks@': {
          template: `<bookmarks></bookmarks>`
        }
      }
    });
})

.component('categories', categoriesComponent);

export default categoriesModule;
