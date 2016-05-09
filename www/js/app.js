angular.module('projectApp', ['ionic', 'LocalStorageModule', 'btford.socket-io', 'angularMoment', 'lbServices'])

.run(function($ionicPlatform, Account,  $ionicPopup, $state) {
  if (Account.getCachedCurrent() === null) {
    Account.getCurrent().$promise
      .then(function(res){
        $state.go('dashboard.groups');
      }, function(res){

      })
  }
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
            title: "Internet Disconnected",
            content: "The internet is disconnected on your device."
          })
          .then(function(result) {
            if(!result) {
              ionic.Platform.exitApp();
            }
          });
      }
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'MainCtrl'
      })

      .state('dashboard', {
        url: '/dashboard',
        abstract: true,
        templateUrl: 'templates/dashboard.html'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      })

      .state('dashboard.groups', {
        url: '/groups',
        cache: false,
        views: {
          'group-tab': {
            templateUrl: 'templates/dashboard-groups.html',
            controller: 'GroupDashboardCtrl'
          }
        }
      })
      .state('dashboard.add', {
        url: '/add',
        cache: false,
        views: {
          'add-tab': {
            templateUrl: 'templates/dashboard-add.html',
            controller: 'AddDashboardCtrl'
          }
        }
      })

      .state('dashboard.profile', {
        url: '/profile',
        cache: false,
        views: {
          'profile-tab': {
            templateUrl: 'templates/dashboard-profile.html',
            controller: 'ProfileDashboardCtrl'
          }
        }
      })

      .state('group', {
        url: '/group',
        abstract: true,
        templateUrl: 'templates/group.html'
      })

      .state('group.tasks', {
        url: '/tasks:id',
        cache: false,
        views: {
          'task-tab': {
            templateUrl: 'templates/group-tasks.html',
            controller: 'TasksGroupCtrl'
          }
        }
      })

      .state('group.addTask', {
        url: '/addTask',
        cache: false,
        views: {
          'addTask-tab': {
            templateUrl: 'templates/group-addTask.html',
            controller: 'AddTaskGroupCtrl'
          }
        }
      })

      .state('group.lib', {
        url: '/lib',
        cache: false,
        views: {
          'lib-tab': {
            templateUrl: 'templates/group-lib.html',
            controller: 'LibGroupCtrl'
          }
        }
      })

      .state('group.info', {
        url: '/info',
        cache: false,
        views: {
          'info-tab': {
            templateUrl: 'templates/group-info.html',
            controller: 'InfoGroupCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  })
