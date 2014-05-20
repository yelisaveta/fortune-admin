'use strict';

var fortuneAdmin = angular.module('fortuneAdmin',
  [
    , 'ngCookies'
    , 'ngResource'
    , 'ngSanitize'
    , 'ngRoute'
    , 'ui.bootstrap'
    , 'xeditable'
    , 'fortuneAdmin.Constants'
    , 'fortuneAdmin.Controllers'
    , 'fortuneAdmin.Directives'
    , 'fortuneAdmin.Services'
    , 'fortuneAdmin.Routes'
    , 'fortuneAdmin.Filters'
  ]
);

fortuneAdmin.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});