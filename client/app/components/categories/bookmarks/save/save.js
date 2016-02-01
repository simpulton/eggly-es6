import angular from 'angular';
import uiRouter from 'angular-ui-router';
import saveComponent from './save.component';

let saveModule = angular.module('save', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('eggly.categories.bookmarks.create', {
      url: '/bookmarks/create',
      //target the un-named 'ui-view' in PARENT states template
      template: '<save></save>'
    })
    .state('eggly.categories.bookmarks.edit', {
      url: '/bookmarks/:bookmarkId/edit',
      //target the un-named 'ui-view' in PARENT states template
      template: '<save></save>'
    })
})

.component('save', saveComponent);

export default saveModule;
