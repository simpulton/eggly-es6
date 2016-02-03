import template from './categoryItem.html';
import './categoryItem.styl';

let categoryItemComponent = {
  restrict: 'A',
  bindings: {
    name: '='
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;
