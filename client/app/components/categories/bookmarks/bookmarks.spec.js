import BookmarksModule from './bookmarks'
import BookmarksController from './bookmarks.controller';
import BookmarksComponent from './bookmarks.component';
import BookmarksTemplate from './bookmarks.html';

describe('Bookmarks', () => {
  let makeController, $stateParams, CategoriesModel, BookmarksModel;

  beforeEach(() => {
    window.module('ui.router');
    window.module(($provide) => {
      $provide.value('CategoriesModel', {
        setCurrentCategory: () => {},
        getCurrentCategory: () => {},
        getCurrentCategoryName: () => {}
      });

      $provide.value('BookmarksModel', {
        getBookmarks: () => { return { then: () => {} } }
      });
    });
  });

  beforeEach(inject((_CategoriesModel_, _BookmarksModel_, _$stateParams_) => {
    $stateParams = _$stateParams_;
    CategoriesModel = _CategoriesModel_;
    BookmarksModel = _BookmarksModel_;

    makeController = () => {
      return new BookmarksController(CategoriesModel, BookmarksModel, $stateParams);
    };
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
      let controller = makeController();

      expect(CategoriesModel.setCurrentCategory).toHaveBeenCalledWith($stateParams.category);
    });

    it('gets all bookmarks immediately', () => {
      spyOn(BookmarksModel, 'getBookmarks').and.returnValue({
        then: (callback) => { callback('bookmarks') }
      });

      let controller = makeController();

      expect(BookmarksModel.getBookmarks).toHaveBeenCalled();
      expect(controller.bookmarks).toBe('bookmarks');
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

      it('includes the intended template',() => {
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
