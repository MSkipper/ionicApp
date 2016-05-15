angular.module('projectApp')
  .controller('LoadingCtrl', function($ionicPlatform, Account,  $ionicPopup, $state) {
    var vm = this;
    if (Account.getCachedCurrent() === null) {
      Account.getCurrent().$promise
        .then(function(res){
          $state.go('dashboard.groups');
        }, function(res){
          $state.go('login');
        })
    }
    return vm

  });
