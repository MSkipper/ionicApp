angular.module('projectApp')
  .controller('AddTaskGroupCtrl', function($scope,$stateParams, $state, Account,$location, Group, GroupHasAcc, groupService, $ionicPopup) {
    var vm = this;
    var currentGroup =  groupService.getGroupId()
    var d = new Date()
    vm.add = function(form) {
      if (form.$valid && vm.addTaskForm.assignedTo !== undefined ) {
        var newTask = {
          name: vm.addTaskForm.name,
          description: vm.addTaskForm.description,
          status: 0,
          createDate: String(d),
          assignedTo: vm.addTaskForm.assignedTo
        };
        Group.tasks.create({id: currentGroup},newTask)
          .$promise
          .then(function(res){
            $ionicPopup.alert({
              title: "Task was created"
            });
          }, function(err){
          })
      }
    }
    Group.prototype$__get__accounts({id: currentGroup})
      .$promise
      .then(function(res){
        vm.users = res
      }, function(err){

      })
    return vm
  });
