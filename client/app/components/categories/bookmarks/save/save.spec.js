import SaveModule from './save'
import SaveController from './save.controller';
import SaveComponent from './save.component';
import SaveTemplate from './save.html';

describe('Save', () => {
  let component, $componentController, $stateParams, $state, BookmarksModel;

  beforeEach(() => {
    window.module('ui.router');
    window.module('save');

    window.module(($provide) => {
      $provide.value('BookmarksModel', {
        getBookmarks: () => {},
        getBookmarkById: () => { return { then: () => {} } }
      });
    });
  });

  beforeEach(inject((_$componentController_, _$stateParams_, _$state_, _BookmarksModel_) => {
    $componentController = _$componentController_;
    $stateParams = _$stateParams_;
    $state = _$state_;
    BookmarksModel = _BookmarksModel_;
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(SaveModule.name).toBe('save');
    });
  });

  describe('Controller', () => {
    it('calls #initEditedBookmark immediately', () => {
      spyOn(SaveController.prototype, 'initEditedBookmark').and.callThrough();

      component = $componentController('save', {
        BookmarksModel: BookmarksModel,
        $stateParams: $stateParams,
        $state: $state
      });
      component.$onInit();

      expect(component.initEditedBookmark).toHaveBeenCalled();
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
