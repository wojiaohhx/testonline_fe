'use strict';

angular
    .module('testonlineApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html',
            })
            .when('/dashboard', {
                tempalteUrl: 'views/dashboard.html',
            })
            $locationProvider.html5Mode(true);
    })
    .run(function ($rootScope) {
        // $('#nav-profile').popover({
        //     content: '<b>'
        // });
        // $rootScope.show_profile_menu = function(target){
        //     $(target).popover('show');
        // }
        // $(document).click(function(){
        //     $('#nav-profile').popover('hide');
        // });
    });
