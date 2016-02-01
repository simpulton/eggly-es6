import BookmarksModule from './bookmarks'
import BookmarksController from './bookmarks.controller';
import BookmarksComponent from './bookmarks.component';
import BookmarksTemplate from './bookmarks.html';

describe('Bookmarks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BookmarksModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BookmarksController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BookmarksTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BookmarksComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BookmarksTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BookmarksController);
      });
  });
});
