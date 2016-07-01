import angular from 'angular';
import CategoriesModule from './categories/categories';

let componentModule = angular.module('app.components', [
  CategoriesModule.name
]);

export default componentModule;
