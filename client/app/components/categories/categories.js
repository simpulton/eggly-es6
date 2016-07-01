import angular from 'angular'
import categoriesComponent from './categories.component'

const categoriesModule = angular.module('categories', [])
    .component('categories', categoriesComponent)
  ;

export default categoriesModule;