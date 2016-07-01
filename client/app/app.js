import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import AppComponent from './app.component';
import Components from './components/components'

angular.module('app', [
    Components.name
  ])
  .component('app', AppComponent)
;
