myApp.controller('staffController', function($scope, $location, staffFactory){
    $scope.users = [];
    $scope.user = {};

    $scope.favorites= true;
    
    // factory.accountUser(user_id,function(data){
    //       console.log(data);
    // })

    $scope.user_loggedin = sessionStorage.getItem('user_loggedin');
    $scope.staff_loggedin = sessionStorage.getItem('staff_loggedin');
   

    if($scope.user_loggedin){
         var user_id = sessionStorage.getItem('user_id');
         factory.accountUser(user_id, function(data){
            console.log(data);
        $scope.user = data;
         })
    }

    $scope.staffLogin = function (login) {
        var staff_id = sessionStorage.getItem('user_id');
        $scope.staff = JSON.parse(sessionStorage.getItem('user'));
        $scope.error = "";

        if($scope.staff){
            switch($scope.staff.role){
                case 'cook':
                    $location.path('/chef');
                    break;
                default:
                    $location.path('/orders');
                    break;
            }           
          } else{
            staffFactory.staffLogin(login, function(data){ 
            if(data == "Invalid staff login"){
                
                $scope.errors.push(data);
                
                } else{
                
                sessionStorage.setItem('user',JSON.stringify(data));
                sessionStorage.setItem('user_id',data._id); 
                sessionStorage.setItem('staff_loggedin',true); 

                var staff_id = sessionStorage.getItem('user_id');
                $scope.staff = JSON.parse(sessionStorage.getItem('user'));
                $scope.staff_loggedin = true;
                $scope.login = {};              
                switch($scope.staff.role){
                    case 'cook':
                        $location.path('/chef');
                        break;
                    default:
                        $location.path('/orders');
                        break;
                    }   
                }
            })
         }
        }

    $scope.userLogin = function (login) {
        var user_id = sessionStorage.getItem('user_id');
        $scope.user = JSON.parse(sessionStorage.getItem('user'));
        $scope.error = "";

        console.log($scope.user);
        // if($scope.user){

        //     $('#login_main').modal('hide');
        //     $location.path('/menu'); 
        //     console.log('skip');
        //  } else{
            console.log('customer login')
            factory.userLogin(login, function(data){
            console.log(data);
             if(data.message){
                $scope.error = data.message;
                } else{
                // $scope.user = data;
                sessionStorage.setItem('user',JSON.stringify(data));
                sessionStorage.setItem('user_id',data._id);
                sessionStorage.setItem('user_loggedin',true); 

                var user_id = sessionStorage.getItem('user_id');
                $scope.user = JSON.parse(sessionStorage.getItem('user'));
                        
                console.log(user_id);
                console.log($scope.user);
                $scope.login = {};
                console.log($scope.session);
                $('#login_main').modal('hide');
                $location.path('/menu');    
                }
             })
         // }
    }

     $scope.userLogout = function () {
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('user_loggedin');
        sessionStorage.removeItem('staff_loggedin');
        $scope.staff_loggedin = false;
        $scope.user = {};
        $location.path('/');   
    }

    $scope.staffAdd= function (user){
    console.log('add staff');
    $scope.message = "";
        staffFactory.staffRegister(user, function(data){
            if(data.message){
                $scope.message = data.message;
            } else {
                $scope.message = 'Registration successful, please log in!'; 
                user_id = data._id;
                $scope.staffNew = {};        
            }
         });
    }


    $scope.tabset=[
                {tab:'Profile', show: true},
                {tab:'Order History', show: false},
                {tab:'Messages', show: false}
                ];

    console.log($scope.tabset);
    console.log($scope.tabShow);

    $scope.switchTabs = function(index){
        $scope.indexTab = index;
        console.log(index);
          for (var j=0; j<$scope.tabset.length; j++){
                if(index == j){
                console.log($scope.tabset[j].show);
                $scope.tabset[j].show= true;
            } else{
                console.log($scope.tabset[j]);
                $scope.tabset[j].show = false;
            }
        }
    }

    $scope.updatePass=function(pass){
        pass.user_id=user_id;
        factory.updatePass(pass, function(data){
            if(data.message){
              $scope.error = data.message;
            } else{
              $scope.message = "Password change successful!";
            }
             $scope.chng = false
        })
    }

    $scope.updateAcct=function(infoUser){
        factory.updateAcct(infoUser, function(data){
            $scope.message = data.message;
            $scope.edit = false
        })
    }

    $scope.listSave=function(){
        factory.listSave(user_id,$scope.user.favorites, function(data){
        })
    }

    $scope.itemlistEdit=function($index){
        if($scope.editActive){
            $scope.indexList=$index;
        }
    }

    $scope.listUp = function(){
        var indexNow = $scope.indexList;
        if(indexNow != 0){
            var itemNow = $scope.user.favorites[indexNow];
            $scope.user.favorites[indexNow] = $scope.user.favorites[indexNow-1];
            $scope.user.favorites[indexNow-1] = itemNow; 
            $scope.indexList = indexNow-1;
        }
    }

    $scope.listDwn = function(){
        var indexNow = $scope.indexList;
        if(indexNow+1 != $scope.user.favorites.length){
            var itemNow = $scope.user.favorites[indexNow];
            $scope.user.favorites[indexNow] = $scope.user.favorites[indexNow+1];
            $scope.user.favorites[indexNow+1] = itemNow; 
            $scope.indexList = indexNow+1;
        } 
    }

    $scope.listRm = function(){
        var indexNow = $scope.indexList;
        console.log($scope.user.favorites[indexNow]);
        $scope.user.favorites.splice(indexNow,1);
        $scope.indexList=null;
    }

    $scope.editActive=false;
    $scope.listEdit = function(){
        if($scope.editActive){
            $scope.editActive=false;
            $scope.indexList=null;
        } else{
            $scope.editActive=true;
        }
    }

    $scope.edit=false;
    $scope.editAcct=function(){
        $scope.message="";
        if($scope.edit){
            $scope.edit=false;
        } else{
            $scope.edit=true;
            $scope.chng=false
        }
    }

    $scope.chng=false;
    $scope.chngPass=function(){
        $scope.message="";
        if($scope.chng){
            $scope.chng=false;
        } else{
            $scope.chng=true;
            $scope.edit=false;
        }
    }
    
})