angular.module('rtt.controllers', ['rtt.services']).
    controller('HomeController', ['$scope', function ($scope) {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');

            $scope.$apply(function () {
                $scope.lat = crd.latitude;
                $scope.lon = crd.longitude
            });
        }

        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        window.navigator.geolocation.getCurrentPosition(success, error, options);


    }]);