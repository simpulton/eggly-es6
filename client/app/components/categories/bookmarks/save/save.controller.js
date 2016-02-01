import _ from 'lodash';

class SaveController {
  constructor(BookmarksModel, $stateParams, $state) {
    'ngInject';

    this.editedBookmark = {
      id: null,
      title: '',
      url: '',
      category: null
    }

    this.$state = $state;
    this.$stateParams = $stateParams;
    this.BookmarksModel = BookmarksModel;

    this.initBookmarks();
    this.initEditedBookmark();
  }

  initEditedBookmark() {
    this.editedBookmark.category = this.$stateParams.category;
  }

  initBookmarks() {
    let id = this.$stateParams.bookmarkId,
        bookmarkSaveCtrl = this;

    bookmarkSaveCtrl.BookmarksModel.getBookmarkById(id)
      .then((response) => {
        bookmarkSaveCtrl.bookmark = response;
        if (bookmarkSaveCtrl.bookmark) {
          bookmarkSaveCtrl.editedBookmark = _.clone(bookmarkSaveCtrl.bookmark);
        }
      });
  }

  returnToBookmarks() {
    this.$state.go('eggly.categories.bookmarks');
  }

  saveBookmark() {
    if (this.editedBookmark.id) {
      this.BookmarksModel.updateBookmark(this.editedBookmark);
    } else {
      this.BookmarksModel.createBookmark(this.editedBookmark);
    }
    this.returnToBookmarks();
  }

  cancel() {
    this.returnToBookmarks();
  }
}

export default SaveController;
