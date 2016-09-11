describe("Dashboard testing suite", function () {
    var dashMockCtrl, apiFactoryMock, rootScope, scope;


    beforeEach(function () {
        module("internationsapp");
        inject(function ($controller, $rootScope, apiFactory) {

            rootScope       = $rootScope;
            scope           = $rootScope.$new();
            apiFactoryMock  = apiFactory;

            dashMockCtrl = $controller('dashboardController', {
                $scope: scope,
                apiFactory: apiFactoryMock
            });
        });
    });


    it("Sample test example, it does not cover code!", function () {
        expect(true).toBeTruthy();
    });
});