
$(document).ready(function () {

    
    
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
    





});