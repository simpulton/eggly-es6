import angular from 'angular';
import CategoriesModel from './models/categories.model';

let CommonModule = angular.module('common', [])
  .service('CategoriesModel', CategoriesModel);

export default CommonModule;
