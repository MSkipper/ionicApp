angular.module('projectApp')
  .controller('LibGroupCtrl', function(Lib, $scope, $state, Account,$location, Group,groupService, GroupHasAcc, apiService, $ionicPopup) {
    var vm = this;
    var currentGroup =  groupService.getGroupId()
    vm.libs = Group.libs({id: currentGroup}).$promise
      .then(function(res){
        vm.libs = res
      },function(err){
      })
    vm.openLink = function(link) {
        window.open(link, "_blank", "location=yes");
        return false; // prevent default action and stop event propagation
      }
    vm.addLink = function(form) {
      if (form.$valid) {
        var lib = {
          name: vm.addLinkForm.name,
          link: vm.addLinkForm.link,
          type: 0
        }
        Group.libs.create({id: currentGroup}, lib).$promise
          .then(function(res){
            vm.addLinkForm.name = "";
            vm.addLinkForm.name = "";
            Group.libs({id: currentGroup}).$promise
              .then(function(res){
                vm.libs = res

              },function(err){

              })
          })
      }

    }
    return vm
  });
