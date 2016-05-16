angular.module('projectApp')
  .controller('TasksGroupCtrl', function($scope, $timeout, Group,Comment, $state,avatarService, Account, Task, groupService, $ionicPopup, $location, $stateParams) {
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
      Account.getCurrent().$promise.then(function(res){
        var userId = res.id
        var user = res.firstName + " " + res.secondName
        var avatarId = res.avatar
        var comment = {
          content: vm.addCommentForm.comment,
          dateAdd: d,
          addBy: user,
          userId: userId,
          avatar: avatarService.getAvatar(avatarId)

        };
        Task.comments.create({id: id}, comment).$promise
          .then(
            function(res) {
              //vm.comments = res
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
      )
    }
    return vm
  });
