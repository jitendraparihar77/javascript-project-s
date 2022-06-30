function validate(){
    var username = document.getElementById('username').value;

    var email = document.getElementById('email').value;

    var password = document.getElementById('password').value;

    var cpassword = document.getElementById('cpassword').value;

    // console.log(username, email, password, cpassword);

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordsmatch(password,cpassword);
}

function checkusername(username) {
    if(username.length>7){
        document.getElementById('username').classList.add('succee');
        document.getElementById('username').classList.replace('error','succee');

        document.getElementById('username_error').innerHTML="";
    }
    else{
        document.getElementById('username').classList.add('error');

        document.getElementById('username_error').innerText="please enter a valid username";
    }
}

function checkemail(email) {
    if(email.length>8 && email.includes('@email')){
        document.getElementById('email').classList.add('succee');
        document.getElementById('email').classList.replace('error','succee');

        document.getElementById('email_error').innerHTML="";
    }
    else{
        document.getElementById('email').classList.add('error');

        document.getElementById('email_error').innerText="please enter a valid email";
    }
}

function checkpassword(password) {
    if(password.length>8 && password.includes('@')){
        document.getElementById('password').classList.add('succee');
        document.getElementById('password').classList.replace('error','succee');

        document.getElementById('password_error').innerHTML="";
    }
    else{
        document.getElementById('password').classList.add('error');

        document.getElementById('password_error').innerText="please enter a valid password";
    }
}

function checkpasswordsmatch(password ,cpassword) {
    if(password==cpassword && cpassword!=""){
        document.getElementById('cpassword').classList.add('succee');
        document.getElementById('cpassword').classList.replace('error','succee');

        document.getElementById('cpassword_error').innerHTML="";
    }
    else{
        document.getElementById('cpassword').classList.add('error');

        document.getElementById('cpassword_error').innerText="password not matched";
    }
}