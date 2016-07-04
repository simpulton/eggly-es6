import template from './category-item.html';
import './category-item.styl';

const categoryItemComponent = {
  bindings: {
    category: '<',
    selected: '&'
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;