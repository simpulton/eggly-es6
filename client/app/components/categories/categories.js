import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriesComponent from './categories.component';
import CategoryItemModule from './categoryItem/categoryItem';
import BookmarksModule from './bookmarks/bookmarks';

const config = ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('eggly.categories', {
      url: '/',
      views: {
        'categories@': {
          template: `<categories></categories>`
        },
        'bookmarks@': {
          template: `<bookmarks></bookmarks>`
        }
      }
    });
};

let categoriesModule = angular.module('categories', [
    uiRouter,
    CategoryItemModule.name,
    BookmarksModule.name
  ])
  .config(config)
  .component('categories', categoriesComponent);

export default categoriesModule;
