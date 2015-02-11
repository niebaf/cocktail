/**
 * Created by Fabien on 28/01/2015.
 */
var cocktailServices = angular.module('cocktailServices', ['ngResource']);

cocktailServices.factory('Phone', ['$resource',
    function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);

