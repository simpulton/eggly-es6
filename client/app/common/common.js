import angular from 'angular';
import CategoriesModel from './models/categories.model';

let commonModule = angular.module('common', [])
  .service('CategoriesModel', CategoriesModel);

export default commonModule;
