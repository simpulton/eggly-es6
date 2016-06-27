import BookmarksModule from './bookmarks'
import BookmarksController from './bookmarks.controller';
import BookmarksComponent from './bookmarks.component';
import BookmarksTemplate from './bookmarks.html';

describe('Bookmarks', () => {
  let component, $componentController, $stateParams, CategoriesModel, BookmarksModel;

  beforeEach(() => {
    window.module('ui.router');
    window.module('bookmarks');

    window.module(($provide) => {
      $provide.value('CategoriesModel', {
        setCurrentCategory: () => {},
        getCurrentCategory: () => {},
        getCurrentCategoryName: () => {}
      });

      $provide.value('BookmarksModel', {
        getBookmarks: () => {
          return {
            then: () => {}
          }
        }
      });
    });
  });

  beforeEach(inject((_$componentController_, _$stateParams_, _CategoriesModel_, _BookmarksModel_) => {
    $componentController = _$componentController_;
    $stateParams = _$stateParams_;
    CategoriesModel = _CategoriesModel_;
    BookmarksModel = _BookmarksModel_;
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(BookmarksModule.name).toBe('bookmarks');
    });
  });

  describe('Controller', () => {
    it('sets the current category immediately', () => {
      $stateParams.category = 'Development';
      spyOn(CategoriesModel, 'setCurrentCategory');

      component = $componentController('bookmarks', {
        CategoriesModel: CategoriesModel,
        BookmarksModel: BookmarksModel,
        $stateParams: $stateParams
      });
      component.$onInit();

      expect(CategoriesModel.setCurrentCategory).toHaveBeenCalledWith($stateParams.category);
    });

    it('gets all bookmarks immediately', () => {
      spyOn(BookmarksModel, 'getBookmarks').and.returnValue({
        then: (callback) => {
          callback('bookmarks')
        }
      });

      component = $componentController('bookmarks', {
        CategoriesModel: CategoriesModel,
        BookmarksModel: BookmarksModel,
        $stateParams: $stateParams
      });
      component.$onInit();

      expect(BookmarksModel.getBookmarks).toHaveBeenCalled();
      expect(component.bookmarks).toBe('bookmarks');
    });
  });

  describe('Template', () => {
    it('contains a binding to the url and title', () => {
      expect(BookmarksTemplate).toContain('{{bookmark.url}}');
      expect(BookmarksTemplate).toContain('{{bookmark.title}}');
    });
  });

  describe('Component', () => {
    let component = BookmarksComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(BookmarksTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('bookmarksListCtrl');
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(BookmarksController);
    });
  });
});
