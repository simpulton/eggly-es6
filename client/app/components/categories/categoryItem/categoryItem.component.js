import template from './categoryItem.html';
import controller from './categoryItem.controller';
import './categoryItem.styl';

let categoryItemComponent = {
  restrict: 'E',
  bindings: {
    name: '='
  },
  template,
  controller,
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;
