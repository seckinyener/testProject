// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/home/home-page.html',
      controller: 'homePageController'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'js/main/templates/contact.tpl.html',
      controller: 'ContactCtrl'
    });

}]);