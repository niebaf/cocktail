var cocktailApp = angular.module('cocktailApp', []);

cocktailApp.controller('cocktailListCtrl', function ($scope) {
    $scope.cocktail = [
        {
            'name': 'cotckail 1',
            'snippet': "Attention à l'alcool !"
        },
        {
            'name': 'cotckail 2',
            'snippet': 'Celui la il est bon !'
        },
        {
            'name': 'cotckail  3',
            'snippet': 'Encore encore encore !'
        }
    ];

    $scope.name = "test à la con...";
});

/*
 var phonecatServices = angular.module('phonecatServices', ['ngResource']);

 phonecatServices.factory('Phone', ['$resource',
 function($resource){
 return $resource('phones/:phoneId.json', {}, {
 query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
 });
 }]);
 */

cocktailApp.controller("PostsCtrl", function ($scope, $http) {
    $http.get('http://pimpmycocktail9691.azurewebsites.net/api/Cocktails/').
        success(function (data, status, headers, config) {
            console.log("ca marche");
            console.log(data);
            $scope.posts = data;
            $scope.name = "Victory !!!";
        }).
        error(function (data, status, headers, config) {
            // log error
            console.log("erreur de merde");
            console.log(data);
            $scope.name = "Defeat !!!";
        });
});


cocktailApp.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});