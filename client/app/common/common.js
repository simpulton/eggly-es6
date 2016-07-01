import angular from 'angular';
import BookmarksModel from './models/bookmarks.model';
import CategoriesModel from './models/categories.model';

let CommonModule = angular.module('common', [])
  .service('BookmarksModel', BookmarksModel)
  .service('CategoriesModel', CategoriesModel);

export default CommonModule;
