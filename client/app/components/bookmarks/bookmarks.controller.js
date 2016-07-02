class BookmarksController {
  constructor(CategoriesModel, BookmarksModel) {
    'ngInject';

    this.CategoriesModel = CategoriesModel;
    this.BookmarksModel = BookmarksModel;
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then((bookmarks) => {
        this.bookmarks = bookmarks;
      });

    this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel);
    this.deleteBookmark = this.BookmarksModel.deleteBookmark;
  }

  createBookmark() {
    this.currentBookmark = this.initNewBookmark();
  }

  editBookmark(bookmark) {
    this.currentBookmark = bookmark;
  }

  initNewBookmark() {
    return {
      id: null,
      title: '',
      url: '',
      category: this.CategoriesModel.getCurrentCategory().name
    };
  }

  saveBookmark(bookmark) {
    if (bookmark.id) {
      this.BookmarksModel.updateBookmark(bookmark);
    } else {
      this.BookmarksModel.createBookmark(bookmark);
    }
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark);
    this.reset();
  }

  reset() {
    this.currentBookmark = null;
  }
}

export default BookmarksController;
