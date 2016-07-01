class CategoriesController {
  constructor(CategoriesModel) {
    'ngInject';

    this.CategoriesModel = CategoriesModel;
  }

  $onInit() {
    this.CategoriesModel.getCategories()
      .then(categories => this.categories = categories);
  }

  onCategorySelected(category) {
    this.CategoriesModel.setCurrentCategory(category);
  }
}

export default CategoriesController;