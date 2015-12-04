//1 add factory to provide data to controller
myApp.factory('staffFactory', function ($http, $route) {
	var menus = [];
	var factory = {};

	var loginUser = {};
    // factory.userList = function (callback){
    //       $http.get('/users').success(function (data) {
    //       callback(data);
    //     }) 
    //    }

    factory.staffLogin = function(user, callback){
      console.log(user);
      $http.post('/staff_login', user).success(function(output){
        callback(output);
      })
    }

    factory.staffRegister = function (userNew , callback){
      $http.post('/staff_register', userNew).success(function(output){
          users = output;       
          callback(users);   
      });
    }

    factory.accountUser = function(user, callback){
      data = {user:user};
      console.log(data)
      $http.get('/infoUser', {params: data}).success(function(result){
        callback(result);
      })
    }

     factory.updateAcct = function(user, callback){
      data = {user:user};
      console.log(data)
      $http.post('/updateUser', data).success(function(result){
        callback(result);
      })
    }

      factory.updatePass = function(pass, callback){
      // data = {user:user};
      console.log(pass)
      $http.post('/updatePass', pass).success(function(result){
        callback(result);
      })
    }




	//2 factory must return value
	return factory
})