import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/common';

const config = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('eggly', {
      url: '',
      abstract: true
    });

  $urlRouterProvider.otherwise('/');
}

angular.module('app', [
    uiRouter,
    angularAnimate,
    Components.name,
    Common.name
  ])
  .config(config)
  .component('app', AppComponent);
