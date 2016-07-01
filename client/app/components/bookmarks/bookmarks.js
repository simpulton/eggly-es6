import angular from 'angular';
import bookmarksComponent from './bookmarks.component';

let BookmarksModule = angular.module('bookmarks', [])
  .component('bookmarks', bookmarksComponent);

export default BookmarksModule;