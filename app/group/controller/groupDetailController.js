APP.controller('groupDetailController', ['$scope', 'apiFactory','$uibModal','$routeParams', function ($scope, apiFactory,$uibModal,$routeParams) {

    $scope.groupDetail = {};

    $scope.getGroupDetail = function (id) {
        apiFactory.getGroupById(id,function (res) {
            $scope.groupDetail = res.data;
        });
    };

    $scope.getUsersByGroupId = function (id) {
        apiFactory.getUsersByGroupId(id,function (res) {
            $scope.userList = res.data;
        });
    };

    $scope.getUsersByGroupId($routeParams.id);
    $scope.getGroupDetail($routeParams.id);
}]);
