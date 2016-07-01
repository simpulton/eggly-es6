import angular from 'angular';
import bookmarksComponent from './bookmarks.component';

let bookmarksModule = angular.module('bookmarks', [])
  .component('bookmarks', bookmarksComponent);

export default bookmarksModule;