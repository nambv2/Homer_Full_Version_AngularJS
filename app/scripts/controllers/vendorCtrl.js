angular
    .module('homer')
    .controller('buyCtrl', buyCtrl)

function buyCtrl($scope, $uibModal) {
    console.log('buyCtrl');
    $scope.addMoreTax = false;
    $scope.createNewVendor = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_create_new_vendor.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
	    	keyboard: false
        });
    };
    $scope.listVendors = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/list_vendor.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    };
    $scope.listAccounts = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/list_accounts.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    };
    $('#o_div_input_31 input').datepicker({
        autoclose: true
    });

    $('#o_div_input_32 input').datepicker({
        autoclose: true
    });

    $scope.createNewTax = function() {
        $scope.addMoreTax = true;
    }
};

function ModalInstanceCtrl ($scope, $uibModalInstance) {
    $scope.accounts = [{
        'id':'111',
        'name':'Tiền'
    },
    {
        'id':'511',
        'name':'Các khoản doanh thu và thu nhập'
    },
    {
        'id':'3331',
        'name':'Thuế GTGT phải nộp'
    },
    {
        'id':'411',
        'name':'Nguồn vốn kinh doanh'
    },
    {
        'id':'1111',
        'name':'Tiền mặt'
    },
    {
        'id':'1112',
        'name':'Tiền gửi ngân hàng'
    }];

    $scope.selectedAccount = function(account) {
        console.log(account);
        $scope.ok();
    }

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};