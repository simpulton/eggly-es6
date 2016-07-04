import angular from 'angular';
import BookmarksModule from './bookmarks/bookmarks';
import CategoriesModule from './categories/categories';

const ComponentsModule = angular.module('app.components', [
  BookmarksModule.name,
  CategoriesModule.name
]);

export default ComponentsModule;
