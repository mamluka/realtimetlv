angular.module('rtt', ['rtt.services', 'rtt.directives', 'rtt.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home',
            {templateUrl: 'partials/home.html', controller: 'HomeController'});
    }]);
