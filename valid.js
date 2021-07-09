//Validition Code For Inputs

var User=document.forms['form']['User'];
var password=document.forms['form']['password'];

var User_error= document.getElementById('User_error');
var password_error= document.getElementById('password_error');

user.addEventListener('textInput',User_Verify);
password.addEventListener('textInput',password_Verify);

function validated(){
if (User.value.length <9) {
    User.style.border="1px solid red";
    User_error.style.display="block";
    User.focus();
    return false;
}
if (password.value.length <6) {
    password.style.border="1px solid red";
    password_error.style.display="block";
    password.focus();
    return false;   
}
}
  function Username_Verify(){
      if(User.value.length >=8) {
    User.style.border="1px solid silver";
    Username_error.style.display="none";
    return true;
      }
  } 
   function password_Verify(){
      if(password.value.length >=5) {
    password.style.border="1px solid silver";
   password_error.style.display="none";
    return true;
      } 
   }