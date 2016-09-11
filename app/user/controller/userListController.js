APP.controller('userListController', ['$scope', 'apiFactory','$uibModal','$location', function ($scope, apiFactory,$uibModal,$location) {
    $scope.alerts = [];
    $scope.userList = [];
    $scope.groupList = [];

    $scope.getUserList = function () {
        apiFactory.getUserList(function (res) {
            $scope.userList = res.data;
        });
    };

    $scope.getGroupList = function () {
        apiFactory.getGroupList(function (res) {
            $scope.groupList = res.data;
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.openAddModal = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'addModal.html',
            controller: 'addNModalInsCtrl',
            size: 'md',
            scope: $scope
        });
        modalInstance.opened.then(function(){
            $scope.newUser = {};
        });
        modalInstance.result.then(function (data) {
            $scope.addUser(data);
        });
    };

    $scope.addUser = function (data) {
        apiFactory.addUser(function (res) {
            //Todo response check
            $scope.getUserList();
        },data);
    };

    $scope.deleteUser = function (id) {
        apiFactory.deleteUserById(id,function (res) {
            //Todo response check
            $scope.alerts.push({  msg: res.message });
            $scope.getUserList();
        });
    };

    $scope.openDetail = function (index) {
        $location.path('/user/'+index);
    };

    $scope.getUserList();
    $scope.getGroupList();
}]);


APP.controller('addNModalInsCtrl', function ($scope, $uibModalInstance) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('close');
    };

    $scope.save = function () {
        //dummy
        $scope.newUser.groupList = 1;
        $uibModalInstance.close($scope.newUser);
    };
});