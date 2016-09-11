APP.factory('apiFactory', ['$http', '$location', function ($http, $location) {

    var urlBase         = 'https://internations.herokuapp.com/api/';
    var factory = {};


    //TODO
    //add user, assign user to group, remove user
    //add group, delete group, assign users to group

    factory.getUserList= function(callback){
        return $http.get(urlBase+'user').then(function (response) {
            callback(response.data);
        }, function (response) {
            handleError(callback,response);
        })
    };

    factory.getUserById= function(id,callback){
        return $http.get(urlBase+'user/'+id).then(function (response) {
            callback(response.data);
        }, function (response) {
            handleError(callback,response);
        })
    };

    factory.addUser = function(callback,data){
        return $http.post(urlBase+'user',data).then(function (response) {
            callback(response.data);
        }, function (response) {
            handleError(callback,response);
        })
    };

    return factory;


    function handleError(callback, response) {
        //todo
        $location.path("/error");
    }

}]);
