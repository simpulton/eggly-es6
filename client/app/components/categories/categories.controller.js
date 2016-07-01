class CategoriesController {
  constructor(CategoriesModel) {
    'ngInject';

    this.CategoriesModel = CategoriesModel;
  }

  $onInit() {
    this.CategoriesModel.getCategories()
      .then(categories => this.categories = categories);
  }

  onCategorySelected(categoryName) {
    console.log('CATEGORY SELECTED', categoryName);
  }
}

export default CategoriesController;