angular.module('projectApp')
  .controller('ProfileDashboardCtrl', function($scope, $timeout,Comment, $state, Account, apiService, avatarService, $ionicPopup, $location) {
    var vm = this;
    vm.currentUser = Account.getCurrent();
    vm.avatar = avatarService.getAvatar
    vm.changeAvatar = function(id, userId){
      avatarService.setAvatar(id, userId)
      vm.avatar = avatarService.getAvatar
      vm.currentUser = Account.getCurrent();


    }

    vm.logout = function () {
      Account.logout(function (res) {
        $location.path('/login');
      });
    };
    return vm
  });

