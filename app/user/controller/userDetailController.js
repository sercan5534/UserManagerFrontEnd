APP.controller('userDetailController', ['$scope', 'apiFactory','$uibModal','$routeParams', function ($scope, apiFactory,$uibModal,$routeParams) {

    $scope.userDetail = {};

    $scope.getUserDetail = function (id) {
        apiFactory.getUserById(id,function (res) {
            $scope.userDetail = res.data;
        });
    };
    $scope.getUserDetail($routeParams.id);
}]);
