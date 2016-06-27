import angular from 'angular';
import uiRouter from 'angular-ui-router';
import saveComponent from './save.component';

const config = ($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('eggly.categories.bookmarks.create', {
      url: '/bookmarks/create',
      template: '<save></save>'
    })
    .state('eggly.categories.bookmarks.edit', {
      url: '/bookmarks/:bookmarkId/edit',
      template: '<save></save>'
    });
};

let saveModule = angular.module('save', [
    uiRouter
  ])
  .config(config)
  .component('save', saveComponent);

export default saveModule;
