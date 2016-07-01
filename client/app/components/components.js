import angular from 'angular';
import BookmarksModule from './bookmarks/bookmarks';
import CategoriesModule from './categories/categories';

let ComponentsModule = angular.module('app.components', [
  BookmarksModule.name,
  CategoriesModule.name
]);

export default ComponentsModule;
