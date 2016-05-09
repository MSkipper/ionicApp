angular.module('projectApp')
  .controller('InfoGroupCtrl', function($scope,$stateParams, $state, Account,$location, Group, GroupHasAcc, groupService, $ionicPopup) {
    var vm = this;
    var currentGroup =  groupService.getGroupId()
    Group.findById({id:currentGroup}).$promise
      .then(function(res){
        vm.info = res.info
      })
    Group.prototype$__get__accounts({id: currentGroup}).$promise
      .then(function(res){
        vm.users = res
      })

    return vm
  });
