describe("User Detail testing suite", function () {
    var ctrl, apiFactoryMock, rootScope, scope,uibModalMock,locationMock;


    beforeEach(function () {
        module("internationsapp");
        inject(function ($controller, $rootScope, apiFactory,$uibModal,$location) {

            rootScope       = $rootScope;
            scope           = $rootScope.$new();
            locationMock = $location;
            uibModalMock = $uibModal;
            apiFactoryMock  = apiFactory;

            ctrl = $controller('userDetailController', {
                $scope: scope,
                apiFactory: apiFactoryMock,
                $uibModal:uibModalMock,
                $location:locationMock
            });
        });
    });


    it("Should call a func from apifactory while getting user detail and set data correctly", function () {
        spyOn(apiFactoryMock,'getUserById').and.callFake(function (id,callback) {
            callback({ data:{ id:2} });
        });
        scope.getUserDetail(1);
        expect(apiFactoryMock.getUserById).toHaveBeenCalled();
        expect(scope.userDetail.id).toBe(2);
    });
});