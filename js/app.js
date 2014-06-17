angular.module('ageApp', ['countTo'])
        .controller('AgeCtrl', function($scope) {
            $scope.profileSrc = 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpa1/t1.0-9/1390733_522718104478250_58286079_n.jpg';

            $scope.getAge = function() {
                var birthDate = new Date('1996-06-16T00:00:00.000Z');
                var otherDate = new Date();

                var years = (otherDate.getFullYear() - birthDate.getFullYear());

                if (otherDate.getMonth() < birthDate.getMonth() ||
                        otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
                    years--;
                }

                return years;
            };
        });