import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';

angular.module('app', [
    ComponentsModule.name
  ])
  .component('app', appComponent)
;
