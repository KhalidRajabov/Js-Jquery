
$(document).ready(function () {

    let loginchecker = JSON.parse(localStorage.getItem("dbUser"))

    if (loginchecker!=null) {
        
        if (loginchecker.login==true) {
            
            alert("You're already logged in\nRedirecting to new page")
            window.location="login.html"
        }
        if (loginchecker.login==false) {
            
            alert("Please log in")
            
            let user = JSON.parse(localStorage.getItem("dbUser"))

            $("#btnLogin").click(function () {
                if ($("#username").val() == user.username && $("#password").val() == user.password) {
        
                    user.login = true
        
        
                    localStorage.setItem("dbUser", JSON.stringify(user))
        
                    window.location = "login.html"
                }
                else {
                    alert("wrong")
                }
            })
        }
    }
    
    if (loginchecker==null) {
        let user = {
            username: "asdf",
            password: 1234,
            login: false
        }
        $("#btnLogin").click(function () {
            if ($("#username").val() == user.username && $("#password").val() == user.password) {
    
                user.login = true
    
    
                localStorage.setItem("dbUser", JSON.stringify(user))
    
                window.location = "login.html"
            }
            else {
                alert("wrong")
            }
        })
    }






});