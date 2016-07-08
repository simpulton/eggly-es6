import CategoriesModule from './categories';
import CategoriesController from './categories.controller';
import CategoriesComponent from './categories.component';
import CategoriesTemplate from './categories.html';

describe('Categories', () => {
  let component, $componentController, CategoriesModel;

  beforeEach(() => {
    window.module('categories');

    window.module($provide => {
      $provide.value('CategoriesModel', {
        getCategories: () => {
          return {
            then: () => {}
          };
        }
      });
    });
  });

  beforeEach(inject((_$componentController_, _CategoriesModel_) => {
    CategoriesModel = _CategoriesModel_;
    $componentController = _$componentController_;
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(CategoriesModule.name).toEqual('categories');
    });
  });

  describe('Controller', () => {
    it('calls CategoriesModel.getCategories immediately', () => {
      spyOn(CategoriesModel, 'getCategories').and.callThrough();

      component = $componentController('categories', {
        CategoriesModel
      });
      component.$onInit();

      expect(CategoriesModel.getCategories).toHaveBeenCalled();
    });
  });

  describe('Template', () => {
    it('includes the `category-item` directive', () => {
      expect(CategoriesTemplate).toContain('category-item');
    });
  });

  describe('Component', () => {
    const component = CategoriesComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(CategoriesTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('categoriesListCtrl');
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CategoriesController);
    });
  });
});
