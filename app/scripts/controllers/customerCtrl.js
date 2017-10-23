angular
    .module('homer')
    .controller('customerCtrl', customerCtrl)

function customerCtrl($scope, $uibModal) {
    console.log('customerCtrl');
    $scope.addMoreTax = false;
    $scope.createNewSalePerson = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_create_new_sale_persion.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
	    	keyboard: false
        });
    };
    $scope.createNewProduct = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_create_new_product.html',
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
    $scope.listCodeTax = function() {
    	var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/list_code_tax.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    }
    $scope.listSalePersons = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/list_sale_persons.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    };
};

function ModalInstanceCtrl ($scope, $uibModalInstance,$uibModal) {
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

    $scope.isCreateNew = true;

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
    //modal_create_new_product
    $scope.units = [{
    	'id':'1',
    	'name':'Bao',
    	'desc':'Tính theo bao'
    },
    {
    	'id':'2',
    	'name':'Chiếc',
    	'desc':'Tính theo chiếc'
    },
    {
    	'id':'3',
    	'name':'Bộ',
    	'desc':'Tính theo bộ'
    },
    {
    	'id':'4',
    	'name':'Cây',
    	'desc':'Tính theo bộ'
    }];

    $scope.categories = [{
    	'id':'1',
    	'name':'Máy xúc',
    	'desc':'Các loại máy xúc'
    },
    {
    	'id':'2',
    	'name':'Hàng tạp hóa',
    	'desc':'Các loại tạp hóa'
    },
    {
    	'id':'3',
    	'name':'Quần áo',
    	'desc':'Loại quần áo'
    },
    {
    	'id':'4',
    	'name':'Thuốc men',
    	'desc':'Các loại thuốc men'
    }];

    $scope.codeTax = [{
    	'id':'1',
    	'name':'Hàng hoá, dịch vụ chịu thuế suất thuế GTGT 0%',
    	'desc':''
    },
    {
    	'id':'2',
    	'name':'Hàng hoá, dịch vụ thuế suất thuế GTGT 1%',
    	'desc':''
    },
    {
    	'id':'3',
    	'name':'Hàng hoá, dịch vụ thuế suất thuế GTGT 2%',
    	'desc':''
    },
    {
    	'id':'4',
    	'name':'Hàng hoá, dịch vụ thuế suất thuế GTGT 4%',
    	'desc':''
    }];

    $scope.salePersons = [{
    	'id':'1',
    	'name':'Admin',
    	'desc':''
    },
    {
    	'id':'2',
    	'name':'Vãng Lai',
    	'desc':''
    }];

    $scope.isCongNo = {
    	'value':'false'
    };
    $scope.isSoCai = {
    	'value':'true'
    };

    $scope.createNewAccount = function() {
    	var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_create_new_account.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    }

    $scope.createNewSalePerson = function() {
    	var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_create_new_sale_person.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    }

    $scope.selectedUnit = function(unit) {
        console.log(unit);
        $scope.ok();
    }
    
    $scope.selectedCategory = function(c) {
    	console.log(c);
    	$scope.ok();
    }

    $scope.selectedCodeTax = function(c) {
    	console.log(c);
    	$scope.ok();
    }

    $scope.measurementUnit = function() {
    	var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/measurement_unit.html',
            size: 'lg',
            controller: ModalInstanceCtrl,
            backdrop: 'static',
            keyboard: false
        });
    }
    $scope.listCategories = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/list_categories.html',
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
};