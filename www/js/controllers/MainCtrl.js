angular.module('projectApp')
    .controller('MainCtrl', function($scope, $state, Account, apiService, $ionicPopup) {
      var vm = this;
      //Should redirect to dashboard When user is loggIN


      vm.login = function(form) {
        if (form.$valid) {
        Account.login({
          "email": vm.authorization.email,
          "password": vm.authorization.password
        }, function (res) {
          $state.go('dashboard.groups');
        }, function (res) {
          $ionicPopup.alert({
            title: "Podane dane są nieprawidłowe"
          });
        });
        }
      };
      return vm

    });

