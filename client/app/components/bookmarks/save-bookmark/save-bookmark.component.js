import template from './save-bookmark.html';
import controller from './save-bookmark.controller';
import './save-bookmark.styl';

const saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template,
  controller,
  controllerAs: 'saveBookmarkCtrl'
};

export default saveBookmarkComponent;