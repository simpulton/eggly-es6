import angular from 'angular';
import bookmarksComponent from './bookmarks.component';
import SaveBookmarksModule from './save-bookmark/save-bookmark';

let BookmarksModule = angular.module('bookmarks', [
    SaveBookmarksModule.name
  ])
  .component('bookmarks', bookmarksComponent);

export default BookmarksModule;