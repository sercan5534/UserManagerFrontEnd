APP.factory('apiFactory', ['$http', '$location', function ($http, $location) {

    var urlBase         = 'https://internations.herokuapp.com/api/';
    var factory = {};


    //TODO
    //add user, assign user to group, remove user
    //add group, delete group, assign users to group

    return factory;

    function handleResponse(callback, response) {

    }

    function handleError(callback, response) {
        $location.path("/error");
    }

}]);
