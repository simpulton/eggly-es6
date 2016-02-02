import SaveModule from './save'
import SaveController from './save.controller';
import SaveComponent from './save.component';
import SaveTemplate from './save.html';

describe('Save', () => {
  let makeController;

  beforeEach(() => {
    window.module('ui.router');
    window.module(($provide) => {
      $provide.value('BookmarksModel', {
        getBookmarks: () => {},
        getBookmarkById: () => { return { then: () => {} } }
      });
    });
  });

  beforeEach(inject((BookmarksModel, $stateParams, $state) => {
    makeController = () => {
      return new SaveController(BookmarksModel, $stateParams, $state);
    };
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(SaveModule.name).toBe('save');
    });
  });

  describe('Controller', () => {
    it('calls #initEditedBookmark immediately', () => {
      spyOn(SaveController.prototype, 'initEditedBookmark').and.callThrough();

      let controller = makeController();

      expect(controller.initEditedBookmark).toHaveBeenCalled();
    });
  });

  describe('Template', () => {
    it('binds to $stateParams.category and the bookmark title', () => {
      expect(SaveTemplate).toContain('{{bookmarkSaveCtrl.$stateParams.category}}');
      expect(SaveTemplate).toContain('{{bookmarkSaveCtrl.bookmark.title}}');
    });
  });

  describe('Component', () => {
    let component = SaveComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(SaveTemplate);
    });

    it('uses correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('bookmarkSaveCtrl');
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(SaveController);
    });
  });
});
