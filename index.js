angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'Title'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.search   = '';     // set the default search/filter term
    $scope.addtrip = function(){   // Add the data to trip list.
    $scope.travel.push({ 'Title':$scope.Title, 'Destination': $scope.Destination, 'Category':$scope.Category, 'StartDate':$scope.StartDate, 'Enddate':$scope.Enddate, 'Todo':$scope.Todo, });
    $scope.Title='';
	$scope.Destination='';
	$scope.Category='';
    $scope.StartDate='';
	$scope.Enddate='';
	$scope.Todo='';
};
    
$scope.Deleteinformation = function(name){		//Delete function		
		var index = -1;		
		var comArr = eval( $scope.travel );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.companies.splice( index, 1 );		
	};
  
  // create the list of Travel information 
  
    $scope.travel = [
    {  Title: 'Canada meeting', Destination: 'Toronto', Category: 'Selcectone', StartDate: '02/12/17', Enddate: '02/17/17', Todo:'Renew passport, book hotel'},
    {  Title: 'Friend marriage', Destination: 'California', Category: 'Selcectone', StartDate: '03/01/17', Enddate: '03/28/17', Todo:'Shopping, flightbooking'},
    { Title: 'Get to gether', Destination: 'Florida', Category: 'Selcectone', StartDate: '04/01/17', Enddate: '04/04/17', Todo:'Book hotel, book trip advisor'},
    {  Title: 'Office Work', Destination: 'Losangles', Category: 'Selcectone', StartDate: '01/04/17', Enddate: '01/07/17', Todo:'Book hotel, book taxi'},
  ];
    
});