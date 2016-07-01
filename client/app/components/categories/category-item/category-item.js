import angular from 'angular';
import categoryItemComponent from './category-item.component';

let categoryItemModule = angular.module('categoryItem', [])
  .component('categoryItem', categoryItemComponent);

export default categoryItemModule;