import template from './categoryItem.html';
import './categoryItem.styl';

let categoryItemComponent = {
  bindings: {
    name: '='
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;
