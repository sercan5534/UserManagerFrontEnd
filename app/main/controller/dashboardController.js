APP.controller('dashboardController', ['$scope', 'apiFactory', function ($scope, apiFactory) {

    $scope.getUserList = function () {
        apiFactory.getUserList(function (res) {
            $scope.userList = res.data;
        })
    };

    $scope.getUserList();

}]);