$(document).ready(function(){

let user = JSON.parse(localStorage.getItem("dbUser")) 
if(user==null){
    alert("You're not logged in\nRedirecting to login area")
    window.location="home.html"
}
else if(user.login==true){
    
    $("#btnLogOut").click(function(){
        let dbUser =JSON.parse(localStorage.getItem("dbUser"))
        dbUser.login=false
        localStorage.setItem("dbUser", JSON.stringify(dbUser))
        window.location="home.html"
    })


}


})