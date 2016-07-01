import angular from 'angular'
import categoriesComponent from './categories.component'
import CategoryItemModule from './category-item/category-item';

const categoriesModule = angular.module('categories', [
    CategoryItemModule.name
  ])
    .component('categories', categoriesComponent)
  ;

export default categoriesModule;