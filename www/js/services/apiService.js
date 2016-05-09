(function(){
angular.module('projectApp')

  .service('apiService', function($http) {

    var groupId = null;

    _getAllGroups = function () {
      return $http({
        url: 'http://92.222.83.249:3000/api/Groups',
        method: 'GET'
        }).then(function successCallback(res) {
            return res.data
        }, function errorCallback(err) {
            return err
        });
    };

    _getAllAccounts = function () {
      return $http({
        url: 'http://92.222.83.249:3000/api/Acounts',
        method: 'GET'
      }).then(function successCallback(res) {
        return res.data
      }, function errorCallback(err) {
        return err
      });
    };

    _setGroupId = function(id) {
      groupId = id
    }

    _getGroupId = function() {
      return groupId
    }

    _login = function () {
      return $http({
        url: 'http://92.222.83.249:3000/api/Accounts/login',
        method: 'POST',
        data: {
          "email": "admin@admin.com",
          "password": "admin"
        }
      }).then(function successCallback(res) {
        return res.data
      }, function errorCallback(err) {
        return err
      });
    };
    return {
      getAllGroups: function(){
        return _getAllGroups().$$state
      },
      login: function(user){
        return _login()
      },
      setGroupId : function(id) {
        groupId = id
      },
      getGroupId: function() {
        return groupId
      }
    };
  });
})();
