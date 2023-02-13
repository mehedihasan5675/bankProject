//==============
//sign up part start
//=====================
let registermail='';
let registerpass='';
document.getElementById('sign_up_btn').addEventListener('click',function(){
   const email=document.getElementById('input_email_sign').value;
   const emailPass=document.getElementById('input_password_sign').value;




 // sign up part validation
 //=================================
if(!email /*email ==false */){
    document.getElementById('sign_up_success').innerText='Email must be provide';
    // alert('Email must be provide');return
}
else if(!email.includes('@')/*email.includes('@') ==false */ || !email.endsWith('.com') /*email.endsWith('.com') ==false */){
    document.getElementById('sign_up_success').innerText='Invalid email : Please provide a valid email.';
    // alert('Invalid : try Again'); return
}
else if(emailPass.length < 8){
    document.getElementById('sign_up_success').innerText='Password must be at least 8 characters long';
    // alert('Password must be at least 8 characters long');return    
}else{
    document.getElementById('sign_up_success').innerText='Registration successfully Done!';
document.getElementById('sign_up_success').style.color='#00FF00'
}
//
//==============================

registermail=email;
registerpass=emailPass;
document.getElementById('input_email_sign').value='';
document.getElementById('input_password_sign').value='';


});



//======================
//Login function start
//=====================
const loginBtn = document.getElementById('login_btn');
loginBtn.addEventListener('click',function(){
const inputEmailField = document.getElementById('input_email_log');
const inputEmailText = inputEmailField.value;

// console.log(inpurEmailText);

const inputPassField = document.getElementById('input_pass_log');
const inputPassText = inputPassField.value;

// inputEmailField.value='';
inputPassField.value='';
console.log(registermail,registerpass);

// if(inputEmailText === registermail && inputPassText===registerpass){
//     window.location.href='bank.html'
// }
if(registermail && registerpass){
    if(inputEmailText === registermail && inputPassText===registerpass){
    window.location.href='bank.html'
}else{
    document.getElementById('login_success').innerText='Please enter your correct information!'
}
}

else{
    document.getElementById('login_success').innerText='Please fill up your field'
}





})

/////////login part end//////////





// if(!textEmail){
//     alert('Email must be provide');
//     return;
// }
// if(!textEmail.includes('@') || !textEmail.endsWith('.com')){
//     alert('Invalid : try Again');
//     return;
// }
// if(textPassword.length < 8){
//     alert('Password must be at least 8 characters long');
//     return;
    
// }