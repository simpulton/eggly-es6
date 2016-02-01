class CategoriesController {
  constructor(CategoriesModel) {
    'ngInject';

    let categoriesListCtrl = this;

    CategoriesModel.getCategories()
      .then((result) => {
        categoriesListCtrl.categories = result;
      });
  }
}

export default CategoriesController;
