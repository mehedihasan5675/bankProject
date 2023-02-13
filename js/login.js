//==============
//sign up part start
//=====================
let registermail='';
let registerpass='';
document.getElementById('sign_up_btn').addEventListener('click',function(){
   const email=document.getElementById('input_email_sign').value;
   const emailPass=document.getElementById('input_password_sign').value;
registermail=email;
registerpass=emailPass;
document.getElementById('input_email_sign').value='';
document.getElementById('input_password_sign').value='';


document.getElementById('sign_up_success').innerText='Registration successfully Done!'
});



//======================
//Login function start
//=====================
const loginBtn = document.getElementById('login_btn');
loginBtn.addEventListener('click',function(){
const inputEmailField = document.getElementById('input_email_log');
const inpurEmailText = inputEmailField.value;

// console.log(inpurEmailText);

const inputPassField = document.getElementById('input_pass_log');
const inputPassText = inputPassField.value;

// inputEmailField.value='';
// inputPassField.value='';

if(inpurEmailText === registermail && inputPassText===registerpass){
    window.location.href='bank.html'
}else{
    document.getElementById('login_success').innerText='Please enter your correct information!'
}





})

/////////login part end//////////





//deposite part staart

// document.getElementById('deposit_btn').addEventListener('click',function(){
//     const depositInputField=document.getElementById('deposit_input');
//    const depositInputTextString =depositInputField.value;
//    const depositInputText=parseFloat(depositInputTextString);
//    console.log(depositInputText);
   
   
// })


