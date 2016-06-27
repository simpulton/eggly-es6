class BookmarksController {
  constructor(CategoriesModel, BookmarksModel, $stateParams) {
    'ngInject';

    this.CategoriesModel = CategoriesModel;
    this.BookmarksModel = BookmarksModel;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.CategoriesModel.setCurrentCategory(this.$stateParams.category);
    this.BookmarksModel.getBookmarks()
      .then((bookmarks) => {
        this.bookmarks = bookmarks;
      });

    this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel);
    this.getCurrentCategoryName = this.CategoriesModel.getCurrentCategoryName.bind(this.CategoriesModel);
    this.deleteBookmark = this.BookmarksModel.deleteBookmark;
  }
}

export default BookmarksController;
