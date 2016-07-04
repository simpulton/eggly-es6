import angular from 'angular';
import saveBookmarkComponent from './save-bookmark.component';

const SaveBookmarkModule = angular.module('saveBookmark', [])
  .component('saveBookmark', saveBookmarkComponent);

export default SaveBookmarkModule;