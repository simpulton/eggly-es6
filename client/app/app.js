import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';

angular.module('app', [])
  .component('app', appComponent)
;
