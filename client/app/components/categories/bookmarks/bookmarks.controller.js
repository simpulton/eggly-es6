class BookmarksController {
  constructor(CategoriesModel, BookmarksModel, $stateParams) {
    'ngInject';

    CategoriesModel.setCurrentCategory($stateParams.category);

    BookmarksModel.getBookmarks()
      .then((bookmarks) => {
        this.bookmarks = bookmarks;
      });

    this.CategoriesModel = CategoriesModel;
    this.BookmarksModel = BookmarksModel;

    this.initControllerMethods();
  }

  initControllerMethods() {
    this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel);
    this.getCurrentCategoryName = this.CategoriesModel.getCurrentCategoryName.bind(this.CategoriesModel);
    this.deleteBookmark = this.BookmarksModel.deleteBookmark;
  }
}

export default BookmarksController;
