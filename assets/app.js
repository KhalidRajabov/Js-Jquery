
$(document).ready(function () {

    let loginchecker = JSON.parse(localStorage.getItem("dbUser"))

    if (loginchecker!=null) {
        
        if (loginchecker.login==true) {
            
            alert("You're already logged in\nRedirecting to new page")
            window.location="login.html"
        }
        else if (loginchecker.login==false&&loginchecker.checked==true) {
            
            alert("You're already logged in\nRedirecting to new page")
            window.location="login.html"
        }
        else if (loginchecker.login==false) {
            
            alert("Please log in")
            
            let user = JSON.parse(localStorage.getItem("dbUser"))

            $("#btnLogin").click(function () {
                if ($("#username").val() == user.username && $("#password").val() == user.password) {
        
                    user.login = true
        
        
                    localStorage.setItem("dbUser", JSON.stringify(user))
        
                    window.location = "login.html"
                }
                else {
                    alert("Username or password is wrong")
                    alert("Friendly reminder:\nUsername: asdf\nPassword:1234")
                }
            })
        }
    }
    
    if (loginchecker==null) {
        let user = {
            username: "asdf",
            password: 1234,
            login: false,
            checked: false
        }
        $("#btnLogin").click(function () {
            if ($("#username").val() == user.username && $("#password").val() == user.password && !($(`#checkbox`).is(`:checked`))) {
                
                user.login = true
                
    
                localStorage.setItem("dbUser", JSON.stringify(user))
    
                window.location = "login.html"
            }
            if ($("#username").val() == user.username && $("#password").val() == user.password && ($(`#checkbox`).is(`:checked`))) {
                
                user.login = true
                user.checked = true
    
                localStorage.setItem("dbUser", JSON.stringify(user))
    
                window.location = "login.html"
            }
            else {
                alert("Username or password is wrong")
                alert("Friendly reminder:\nUsername: asdf\nPassword:1234")  
            }
        })
    }






});