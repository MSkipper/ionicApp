(function(){
  angular.module('projectApp')

    .service('groupService', function() {
      var groupId = null;
      var groupUser = [];
      var groupInfo = "";
      return {
        setGroupId : function(id) {
          groupId = id
        },
        getGroupId: function() {
          return groupId
        },
        setGroupUsers: function(users) {
          groupUser = users
        },
        getGroupUsers: function() {
          return groupUser
        },
        setGroupInfo: function(info) {
          groupInfo = info
        },
        getGroupInfo: function() {
          return groupInfo
        }
      }

    });
})();
