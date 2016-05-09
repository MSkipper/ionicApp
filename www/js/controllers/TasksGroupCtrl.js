angular.module('projectApp')
  .controller('TasksGroupCtrl', function($scope, Group, $state, Account, Task, groupService, $ionicPopup, $location, $stateParams) {
    var vm = this;
    vm.tasks = [];
    vm.tasks.empty = false
    var d = new Date();
    groupService.setGroupId($stateParams.id);
    Group.find({filter: {where: {id: $stateParams.id}}}).$promise
      .then(
        function (res) {
          vm.group = res[0];
        }, function (err) {
        });
    Group.tasks({id: $stateParams.id}).$promise
      .then(
        function(res) {
          vm.tasks = res
          if(vm.tasks.length === 0){
            vm.tasks.empty = true
          }
        },function(err) {

        }
      );

    vm.status = function(status, id){
      Task.prototype$updateAttributes({id: id}, {status: status}).$promise
        .then(function(res){
          Group.tasks({id: $stateParams.id}).$promise
            .then(
              function(res) {
                vm.tasks = res
              },function(err) {

              }
            )
        })
    };

    vm.showDetails = function(id){
      vm.showElement = id
      vm.comments = Task.prototype$__get__comments({id: id}).$promise
        .then(
          function(res) {
            vm.comments = res
          },function(err) {
          }
        )
    };

    vm.addComment = function(form, id){
      var user = Account.getCurrent().firstName
      var comment = {
        content: vm.addCommentForm.comment,
        dateAdd: d,
        addBy: String(user)
      };
      Task.comments.create({id: id}, comment).$promise
        .then(
          function(res) {
            vm.comments = res
            vm.addCommentForm.comment = ""
            vm.comments = Task.prototype$__get__comments({id: id}).$promise
              .then(
                function(res) {
                  vm.comments = res
                },function(err) {
                }
              )
          },function(err) {
          }
        )
    }
    return vm
  });
