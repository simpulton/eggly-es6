import CategoriesModule from './categories'
import CategoriesController from './categories.controller';
import CategoriesComponent from './categories.component';
import CategoriesTemplate from './categories.html';

describe('Categories', () => {
  let $rootScope, makeController, CategoriesModel;

  beforeEach(() => {
    window.module(($provide) => {
      $provide.value('CategoriesModel', {
        getCategories: () => { return { then: () => {} } }
      });
    });
  });

  beforeEach(inject((_CategoriesModel_) => {
    CategoriesModel = _CategoriesModel_;
    makeController = () => {
      return new CategoriesController(CategoriesModel);
    };
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(CategoriesModule.name).toEqual('categories');
    });
  });

  describe('Controller', () => {
    it('calls CategoriesModel.getCategories immediately', () => {
      spyOn(CategoriesModel, 'getCategories').and.callThrough();
      let controller = makeController();
      expect(CategoriesModel.getCategories).toHaveBeenCalled();
    });
  });

  describe('Template', () => {
    it('includes the `category-item` directive', () => {
      expect(CategoriesTemplate).toContain('<category-item');
    });
  });

  describe('Component', () => {
      let component = CategoriesComponent;

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
