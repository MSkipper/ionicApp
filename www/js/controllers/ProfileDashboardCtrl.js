angular.module('projectApp')
  .controller('ProfileDashboardCtrl', function($scope, $state, Account, apiService, $ionicPopup, $location) {
    var vm = this;
    vm.currentUser = Account.getCurrent();
    vm.logout = function () {
      Account.logout(function (res) {
        $location.path('/login');
      });
    };
    return vm
  });
