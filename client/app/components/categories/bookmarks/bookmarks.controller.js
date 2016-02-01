class BookmarksController {
  constructor(CategoriesModel, BookmarksModel, $stateParams, $scope) {
    'ngInject';

    let bookmarksListCtrl = this;

    CategoriesModel.setCurrentCategory($stateParams.category)
      .then(() => {
        bookmarksListCtrl.currentCategoryName = CategoriesModel.getCurrentCategoryName();
      });

    BookmarksModel.getBookmarks()
      .then((bookmarks) => {
        bookmarksListCtrl.bookmarks = bookmarks;
      });

    bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory.bind(CategoriesModel);
    bookmarksListCtrl.deleteBookmark = BookmarksModel.deleteBookmark;
  }
}

export default BookmarksController;
