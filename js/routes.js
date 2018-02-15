angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.bizConnect', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bizConnect.html',
        controller: 'bizConnectCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('messaging', {
    url: '/page7',
    templateUrl: 'templates/messaging.html',
    controller: 'messagingCtrl'
  })

  .state('writeYourComments', {
    url: '/page8',
    templateUrl: 'templates/writeYourComments.html',
    controller: 'writeYourCommentsCtrl'
  })

  .state('readFeedback', {
    url: '/page9',
    templateUrl: 'templates/readFeedback.html',
    controller: 'readFeedbackCtrl'
  })

  .state('menu.video', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/video.html',
        controller: 'videoCtrl'
      }
    }
  })

  .state('resource', {
    url: '/page11',
    templateUrl: 'templates/resource.html',
    controller: 'resourceCtrl'
  })

  .state('menu.discription', {
    url: '/page12',
	params: {
		name: "",
		website: "",
		majors: "",
		position: "",
		title: "",
		oci: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/discription.html',
        controller: 'discriptionCtrl'
      }
    }
  })

  .state('menu.tips', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tips.html',
        controller: 'tipsCtrl'
      }
    }
  })

  .state('menu.welcomeMessage', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welcomeMessage.html',
        controller: 'welcomeMessageCtrl'
      }
    }
  })

  .state('menu.maps', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      }
    }
  })

  .state('menu.signUp', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })

  .state('servicesForStudentsOnCampus', {
    url: '/page17',
    templateUrl: 'templates/servicesForStudentsOnCampus.html',
    controller: 'servicesForStudentsOnCampusCtrl'
  })

  .state('page', {
    url: '/page18',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});