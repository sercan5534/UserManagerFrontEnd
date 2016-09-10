APP.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        
        // Dashboard
        .when('/',{
            templateUrl: '/app/main/view/dashboardView.html',
            controller: 'dashboardController'
        })
        
        // User List
        .when('/user',{
            templateUrl: '/app/user/view/userList.html',
            controller: 'userListController'
        })
        
        // User Detail
        .when('/user/:id',{
            templateUrl: '/app/user/view/userDetail.html',
            controller: 'userDetailController'
        })

        // Group List
        .when('/group',{
            templateUrl: '/app/group/view/groupListView.html',
            controller: 'groupListController'
        })

        // Group Detail
        .when('/group/:id',{
            templateUrl: '/app/group/view/groupDetailView.html',
            controller: 'groupDetailController'
        })

        // Error
        .when('/error', {
            templateUrl: '/app/main/view/error.html',
            controller: 'errorController'
        })

        // Otherwise
        .otherwise({
            templateUrl: '/app/main/view/error.html',
            controller: 'errorController'
        });  
}]);