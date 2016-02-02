import template from './categoryItem.html';
import './categoryItem.styl';

let categoryItemComponent = {
  restrict: 'E',
  bindings: {
    name: '='
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;
