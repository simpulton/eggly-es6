class CategoriesController {
  constructor(CategoriesModel) {
    'ngInject';

    this.categories = CategoriesModel.categories;
  }
}

export default CategoriesController;