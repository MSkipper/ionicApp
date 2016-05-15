angular.module('projectApp')
    .controller('MainCtrl', function($scope, $state, Account, apiService, $ionicPopup) {
      var vm = this;

      vm.login = function(form) {
        if (form.$valid) {
        Account.login({
          "email": vm.authorization.email,
          "password": vm.authorization.password
        }, function (res) {
          $state.go('dashboard.groups');
        }, function (res) {
          $ionicPopup.alert({
            title: "The data is incorrect. Please enter the correct data"
          });
        });
        }
      };
      return vm

    });

