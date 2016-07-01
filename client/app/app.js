import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import AppComponent from './app.component';
import Common from './common/common'
import Components from './components/components'

angular.module('app', [
    Common.name,
    Components.name
  ])
  .component('app', AppComponent)
;
