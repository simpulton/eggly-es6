import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoryItemComponent from './categoryItem.component';

let categoryItemModule = angular.module('categoryItem', [
  uiRouter
])

.component('categoryItem', categoryItemComponent);

export default categoryItemModule;
