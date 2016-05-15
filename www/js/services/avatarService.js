(function(){
  angular.module('projectApp')

    .service('avatarService', function(Account, Comment) {

      return {
        getAvatar: function(id) {
          return 'img/' + id + '.png'
        },
        setAvatar: function(id, userId) {
          if(id == 8) {
            id = 1
          } else {
            ++id
          }
          Account.prototype$updateAttributes({id: userId}, {avatar: id}).$promise
            .then(function(res){
            })

        }

      };
    });
})();
