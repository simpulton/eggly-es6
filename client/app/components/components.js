import angular from 'angular';
import CategoriesModule from './categories/categories';
import BookmarksModule from './categories/bookmarks/bookmarks';

let componentModule = angular.module('app.components', [
  CategoriesModule.name,
  BookmarksModule.name 
]);

export default componentModule;
