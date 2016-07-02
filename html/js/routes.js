/* global module, require */

var name = 'appRoutes';
require('angular').module(name, [
    require('angular-ui-router')
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('defaultLayout', {
        abstract: true,
        templateUrl: 'views/layouts/layout.html'
    });

    $stateProvider.state('home', {
        parent: 'defaultLayout',
        url: '/home',
        templateUrl: 'views/pages/home.html',
        controller: function () {

        }
    });
});

module.exports = name;
