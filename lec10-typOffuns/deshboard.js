
function loginUser(UserName,callback){
 console.log(`user ${UserName} loged in`)
 callback()
}

function redirect(){
    console.log("Redirecting to dashboard....")
}

loginUser("Sanu",redirect)