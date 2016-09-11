APP.controller('dashboardController', ['$scope', 'apiFactory','$location', function ($scope, apiFactory,$location) {
    $scope.alerts = [];
    $scope.getUserList = function () {
        apiFactory.getUserList(function (res) {
            $scope.userList = res.data;
        })
    };

    $scope.getGroupList = function () {
        apiFactory.getGroupList(function (res) {
            $scope.groupList = res.data;
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.openGroupDetail = function (index) {
        $location.path('/group/'+index);
    };

    $scope.openUserDetail = function (index) {
        $location.path('/user/'+index);
    };

    $scope.deleteGroup = function (id) {
        apiFactory.deleteGroupById(id,function (res) {
            //Todo response check
            $scope.alerts.push({  msg: res.message });
            $scope.getGroupList();
        });
    };

    $scope.deleteUser = function (id) {
        apiFactory.deleteUserById(id,function (res) {
            //Todo response check
            $scope.alerts.push({  msg: res.message });
            $scope.getUserList();
        });
    };
    $scope.getGroupList();
    $scope.getUserList();

}]);