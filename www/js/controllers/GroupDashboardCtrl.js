angular.module('projectApp')
  .controller('GroupDashboardCtrl', function($scope, $state, Account,$location, Group, GroupHasAcc, apiService, $ionicPopup) {
    var vm = this;
    var userId = Account.getCurrentId()
    var getGroups = Account.prototype$__get__groups({id : userId})

     getGroups.$promise.then(function (res) {

      vm.groups = res;
    });

    vm.go = function (id) {
      $state.go('group.tasks', {id:id})
    };

    return vm
  });

