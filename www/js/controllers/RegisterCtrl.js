angular.module('projectApp')
    .controller('RegisterCtrl', function($scope, $state, Account, apiService, $ionicPopup) {
      var vm = this;
      vm.registry = function(form) {
        if (form.$valid) {
          var newUser = {
            email: vm.authorization.email,
            password: vm.authorization.password,
            firstName: vm.authorization.name,
            lastName: vm.authorization.surname,
            avatar: 0
          };
          Account.create(newUser)
            .$promise
            .then(function (res) {
              Account.login({
                "email": vm.authorization.email,
                "password": vm.authorization.password
              }, function () {
                $state.go('dashboard.profile');
              }, function (res) {
                $ionicPopup.alert({
                  title: "Podane dane są nieprawidłowe"
                });
              })
            })
        }
      };
      return vm
    });
