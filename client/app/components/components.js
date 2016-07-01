import angular from 'angular';
import CategoriesModule from './categories/categories';

let ComponentsModule = angular.module('app.components', [
  CategoriesModule.name
]);

export default ComponentsModule;
