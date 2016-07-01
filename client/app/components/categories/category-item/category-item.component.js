import template from './category-item.html';
import './category-item.styl';

let categoryItemComponent = {
  bindings: {
    name: '<',
    selected: '&'
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;