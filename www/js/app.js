angular.module('projectApp', ['ionic', 'LocalStorageModule', 'btford.socket-io', 'angularMoment', 'lbServices'])

.run(function($ionicPlatform, Account,  $ionicPopup, $state) {
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
              $ionicPlatform.exitApp();
            }
          });
      }
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('loading', {
        url: '/loading',
        templateUrl: 'templates/loading.html',
        controller: 'LoadingCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'MainCtrl as vm'
      })

      .state('dashboard', {
        url: '/dashboard',
        abstract: true,
        templateUrl: 'templates/dashboard.html'

      })

      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl  as vm'
      })

      .state('dashboard.groups', {
        url: '/groups',
        cache: false,
        views: {
          'group-tab': {
            templateUrl: 'templates/dashboard-groups.html',
            controller: 'GroupDashboardCtrl  as vm'
          }
        }
      })
      .state('dashboard.add', {
        url: '/add',
        cache: false,
        views: {
          'add-tab': {
            templateUrl: 'templates/dashboard-add.html',
            controller: 'AddDashboardCtrl  as vm'
          }
        }
      })

      .state('dashboard.profile', {
        url: '/profile',
        cache: false,
        views: {
          'profile-tab': {
            templateUrl: 'templates/dashboard-profile.html',
            controller: 'ProfileDashboardCtrl  as vm'
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
            controller: 'TasksGroupCtrl  as vm'
          }
        }
      })

      .state('group.addTask', {
        url: '/addTask',
        cache: false,
        views: {
          'addTask-tab': {
            templateUrl: 'templates/group-addTask.html',
            controller: 'AddTaskGroupCtrl  as vm'
          }
        }
      })

      .state('group.lib', {
        url: '/lib',
        cache: false,
        views: {
          'lib-tab': {
            templateUrl: 'templates/group-lib.html',
            controller: 'LibGroupCtrl  as vm'
          }
        }
      })

      .state('group.info', {
        url: '/info',
        cache: false,
        views: {
          'info-tab': {
            templateUrl: 'templates/group-info.html',
            controller: 'InfoGroupCtrl  as vm'
          }
        }
      })

      .state('about', {
        url: '/about',
        cache: true,
        templateUrl: 'templates/about.html'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/loading');
  })
