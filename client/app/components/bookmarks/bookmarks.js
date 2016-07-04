import angular from 'angular';
import bookmarksComponent from './bookmarks.component';
import SaveBookmarksModule from './save-bookmark/save-bookmark';

const BookmarksModule = angular.module('bookmarks', [
    SaveBookmarksModule.name
  ])
  .component('bookmarks', bookmarksComponent);

export default BookmarksModule;