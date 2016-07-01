import angular from 'angular';
import saveBookmarkComponent from './save-bookmark.component';
import './save-bookmark.styl';

let SaveBookmarkModule = angular.module('saveBookmark', [])
  .component('saveBookmark', saveBookmarkComponent);

export default SaveBookmarkModule;