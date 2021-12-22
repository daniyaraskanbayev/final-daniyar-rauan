function funcvalid(forme){
 var email = form.email.value;    
 var name = form.name.value;
 var password = form.password.value;
 var Repassword = form.Repassword.value; 
 var state = form.state.value;    
    var fail = false;
    var email_valid=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var password_valid=/[0-9a-z]/i;
    var name_valid=/[a-z]/i
    
    if(name==""||name==" "){
        fail = "You did not enter a name!";
    }
     else if(name_valid.test(name)==false){
        fail = "You have entered the name incorrectly";
    }
    else if(email_valid.test(email)==false){
        fail = "You have entered the email incorrectly";
    }
    else if(password==""){
        fail = "You have not entered a password!";
    }
    else if(password_valid.test(password) == false){
        fail = "You have entered the wrong password!";
    }
    else if(Repassword==""){
        fail = "You have not entered the password again!";
    }
    else if(password != Repassword){
        fail = "You have entered a different password!";
    }
    else if(state == ""){
        fail = "You did not specify your gender";
    }
    if (fail){
        alert(fail);
    }
    else {
    window.location="https://www.limeroad.com/";
    }
}
