angular
    .module('homer')
    .controller('listBills', listBills)

function listBills($scope) {
	console.log('listBills');
	$scope.bills = [{
		'a1':'ASUSTeK',
		'a2':'10/15/2017',
		'a3':'BILL/2017/0002',
		'a4':'11/30/2017',
		'a5':'5,749.99',
		'a6':'5,749.99',
		'a7':'Open'
	},
	{
		'a1':'ASUSTeK',
		'a2':'10/15/2017',
		'a3':'BILL/2017/0002',
		'a4':'11/30/2017',
		'a5':'5,749.99',
		'a6':'5,749.99',
		'a7':'Open'
	},
	{
		'a1':'ASUSTeK',
		'a2':'10/15/2017',
		'a3':'BILL/2017/0002',
		'a4':'11/30/2017',
		'a5':'5,749.99',
		'a6':'5,749.99',
		'a7':'Open'
	},
	{
		'a1':'ASUSTeK',
		'a2':'10/15/2017',
		'a3':'BILL/2017/0002',
		'a4':'11/30/2017',
		'a5':'5,749.99',
		'a6':'5,749.99',
		'a7':'Open'
	}]
};
