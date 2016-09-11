APP.controller('groupListController', ['$scope', 'apiFactory','$uibModal','$location', function ($scope, apiFactory,$uibModal,$location) {

    $scope.groupList = [];

    $scope.getGroupList = function () {
        apiFactory.getGroupList(function (res) {
            $scope.groupList = res.data;
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.openDetail = function (index) {
        $location.path('/group/'+index);
    };

    $scope.openAddModal = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'addGroupModal.html',
            controller: 'addGroupModalInsCtrl',
            size: 'md',
            scope: $scope
        });
        modalInstance.opened.then(function(){
            $scope.newUser = {};
        });
        modalInstance.result.then(function (data) {
            $scope.addGroup(data);
        });
    };

    $scope.addGroup = function (data) {
        apiFactory.addGroup(function (res) {
            //Todo response check
            $scope.getGroupList();
        },data);
    };

    $scope.deleteGroup = function (id) {
        apiFactory.deleteGroupById(id,function (res) {
            //Todo response check
            $scope.alerts.push({  msg: res.message });
            $scope.getGroupList();
        });
    };

    $scope.getGroupList();
}]);

APP.controller('addGroupModalInsCtrl', function ($scope, $uibModalInstance) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('close');
    };

    $scope.save = function () {
        $uibModalInstance.close($scope.newGroup);
    };
});