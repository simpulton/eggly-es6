import CategoryItemModule from './categoryItem'
import CategoryItemComponent from './categoryItem.component';
import CategoryItemTemplate from './categoryItem.html';

describe('CategoryItem', () => {
  describe('Module', () => {
    it('is named correctly', () => {
      expect(CategoryItemModule.name).toBe('categoryItem');
    });
  });

  describe('Template', () => {
    it('binds to the `name` property', () => {
      expect(CategoryItemTemplate).toContain('{{categoryItemCtrl.name}}');
    });
  });

  describe('Component', () => {
    let component = CategoryItemComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(CategoryItemTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('categoryItemCtrl');
    });

    it('binds a `name` property', () => {
      expect(component.bindings.name).toBe('<');
    });
  });
});
