class CategoriesController {
  constructor(CategoriesModel) {
    'ngInject';

    CategoriesModel.getCategories()
      .then(categories => this.categories = categories);
  }
}

export default CategoriesController;
