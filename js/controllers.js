angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    if(navigator.onLine){
        $scope.mainMessage = "";
    }
    else{
        $scope.mainMessage = "You're OFFLINE.Try connecting to the internet and try again!";
    }

}])
   
.controller('bizConnectCtrl', ['$scope', '$stateParams', '$ionicScrollDelegate', '$timeout', '$ionicLoading', 'Result', 
function ($scope, $stateParams, $ionicScrollDelegate,$timeout,$ionicLoading, Result) {
    if(navigator.onLine){
        
    
    $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
    });
   
    
    $scope.results = [];
	$scope.loadData = function(){
    	Result.all().then(function(res){
    	    if(res == ""){
    	         $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
    });
    }
    
    
    	else {
    	    $scope.results = res;
    	    $ionicLoading.show({
         template: 'Loading...',
         duration: 500,
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
        });
    	    
    }
    	
    })
	}
	
	$scope.loadData();
	

   
    
    
    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
      
    };
    
 
    $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
    
     window.location.reload(false);
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
  $scope.hidePic = true;
  $scope.hideSearch = false;
  $scope.hideScroll = false;
    }
    
    else{
        $scope.hidePic = false;
        $scope.hideSearch = true;
  $scope.hideScroll = true;
        
         $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
    
     window.location.reload(false);
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
  
    }


     
    
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('messagingCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$location) {
    
    $scope.goBack = function(){
       $location.path("/page1");
    }
    
 
}])
   
.controller('writeYourCommentsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('readFeedbackCtrl', ['$scope', '$stateParams', 'Result2', '$timeout', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Result2,$timeout,$ionicLoading) {
        
        
            $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
    });
        
        $scope.results2 = [];
	$scope.loadData = function(){
    	Result2.all().then(function(res){
    	if(res == ""){
    	         $ionicLoading.show({
         template: 'Loading...',
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
    });
    }
    
    
    	else {
    	    $scope.results2 = res;
    	    $ionicLoading.show({
         template: 'Loading...',
         duration: 500,
         animation: 'fade-in',
         showBackdrop: true,
        showDelay: 0
        });
    	    
    }
    	
    })
	}
	
	$scope.loadData();
	

}])
   
.controller('videoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    
     
}])
   
.controller('resourceCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {
    
    $scope.takeHome = function(){
         $location.path("/page1");
    }

}])
   
.controller('discriptionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
     // description page
    
    $scope.list = {
        "Name" : $stateParams.name,
        "Website" : $stateParams.website,
        "Majors" : $stateParams.majors,
        "Position" : $stateParams.position,
        "Title" : $stateParams.title,
        "OCI" : $stateParams.oci
        
    }


}])
   
.controller('tipsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('welcomeMessageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mapsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('servicesForStudentsOnCampusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 