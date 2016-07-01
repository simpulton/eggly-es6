import angular from 'angular';
import categoryItemComponent from './category-item.component';

let CategoryItemModule = angular.module('categoryItem', [])
  .component('categoryItem', categoryItemComponent);

export default CategoryItemModule;