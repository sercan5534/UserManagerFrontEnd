APP.controller('userListController', ['$scope', 'apiFactory','$uibModal', function ($scope, apiFactory,$uibModal) {

    $scope.userList = [];

    $scope.getUserList = function () {
        apiFactory.getUserList(function (res) {
            $scope.userList = res.data;
        })
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

    $scope.getUserList();
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