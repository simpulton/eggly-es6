import template from './categories.html';
import controller from './categories.controller';
import './categories.styl';

let categoriesComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'categoriesListCtrl'
};

export default categoriesComponent;
