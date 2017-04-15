/**
 * Created by sony on 09.04.2017.
 */
define([
    'angular',
    'js/main/home/home-page-controller'
], function(angular, homeController){
   'use strict';
   var homePage = angular.module('app.homePage', []);
   homePage.controller('homePageController', homePageController);
});