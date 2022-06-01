$(document).ready(function(){

let user = JSON.parse(localStorage.getItem("dbUser")) 
if(user.login==true){
    
    
    $("#btnLogOut").click(function(){
        let dbUser =JSON.parse(localStorage.getItem("dbUser"))
        dbUser.login=false
        localStorage.setItem("dbUser", JSON.stringify(dbUser))
        window.location="home.html"
    })


}




})