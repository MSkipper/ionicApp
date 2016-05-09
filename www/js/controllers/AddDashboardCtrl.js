angular.module('projectApp')
  .controller('AddDashboardCtrl', function($scope, $state, Account, apiService, $ionicPopup, Group) {
    var vm = this;
    var currentUser = Account.getCurrentId();
    var selected = [];
    vm.options = Account.find({
      filter: {
        where: {
          id: {
            neq: currentUser}}}})

    function _addMemeberToGroup(members, groupId) {
      for(var i = 0; i<members.length;i++){
        Group.prototype$__link__accounts({id: groupId}, {fk: members[i]})
      }
    }

    vm.clicked = function (member) {
      var index = selected.indexOf(member.id);
      if (index > -1) {
        selected.splice(index, 1);
        member.selected = false;
      } else {
        selected.push(member.id);
        member.selected = true;
      }

    }

    vm.add = function(form) {
      if (form.$valid) {
        var newGroup = {
          name: vm.addForm.name,
          info: vm.addForm.info
        }
        Account.prototype$__create__groups({id:currentUser},newGroup)
          .$promise
          .then(function(res){
            _addMemeberToGroup(selected, res.id)
          })

          $ionicPopup.alert({
            title: "Grupa została stworzona"
          });
          vm.addForm.name = ""
          $state.go('dashboard.groups');
        }
    };
    return vm

  });
