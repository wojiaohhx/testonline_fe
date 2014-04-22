'use strict';

angular
    .module('testonlineApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
        .state('welcome', {
            url: "/",
            templateUrl: "views/welcome.html"
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
        })
    })
    .run(function ($rootScope) {
        
    });
