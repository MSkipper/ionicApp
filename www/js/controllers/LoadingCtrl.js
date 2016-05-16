angular.module('projectApp')
  .controller('LoadingCtrl', function($ionicPlatform, Account,  $ionicPopup, $state) {
    var vm = this;
    if (Account.getCachedCurrent() === null) {
      Account.getCurrent().$promise
        .then(function(res){
          $state.go('dashboard.groups');
        }, function(err){
          $state.go('login');
        })
    }
    return vm

  });
