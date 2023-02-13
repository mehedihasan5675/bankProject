
// ============================
//step-1:withdraw btn click and data collect
//==========================================
document.getElementById('withdraw_btn').addEventListener('click',function(){
const withdrawInputField = document.getElementById('withdraw_input');
const withdrawInputTextString = withdrawInputField.value;
const withdrawInputText = parseFloat(withdrawInputTextString);
withdrawInputField.value='';



// ============================
//step-3-pre: minus from balance this withdraw monye
//this step has written before step-2 because of validation issu
//==========================================
const balanceMoney=document.getElementById('balance_input');
    const balancePreviousString =balanceMoney.innerText;
    const balancePreviousNumber=parseFloat(balancePreviousString);

    

// ============================
// step-last:validation for withdraw money start
//==========================================
    if(withdrawInputText > 0 && withdrawInputText <= balancePreviousNumber){
        
        const withdrawAlert= document.getElementById('withdraw_alert');
        withdrawAlert.innerText='Welcome! your withdraw successfully Done...';
        withdrawAlert.style.color='#00FF00';
        }
    else if(withdrawInputText <=0){
        const withdrawAlert= document.getElementById('withdraw_alert');
    withdrawAlert.innerText='Please provide a valid amount...';
    withdrawAlert.style.color='#ff4c4c';

    return
    }else if(withdrawInputText > balancePreviousNumber ){
        const withdrawAlert= document.getElementById('withdraw_alert');
    withdrawAlert.innerText='You can not withdraw more than balance...';
    withdrawAlert.style.color='#ff4c4c';
    return
    }else{
        const withdrawAlert= document.getElementById('withdraw_alert');
    withdrawAlert.innerText='Please Do not provide an empty amount...';
    withdrawAlert.style.color='#ff4c4c';
    return
    }
// ============================
//validation for withdraw money end
//==========================================






// ============================
//step-2:add input data (money) to withdraw dashboard
//==========================================

    const withdrawMoney=document.getElementById('withdraw_money');
    const previousWithdrawString= withdrawMoney.innerText;
    const previousWithdraw=parseFloat(previousWithdrawString);

    const currentWithdraw = previousWithdraw + withdrawInputText;

    withdrawMoney.innerText=currentWithdraw;


// ============================
//step-3-post: minus from balance this withdraw monye
//==========================================
    
    const currentBalance = balancePreviousNumber - withdrawInputText;
    balanceMoney.innerText=currentBalance;












    // if(withdrawInputText>previousWithdraw){
    //     const withdrawAlert= document.getElementById('withdraw_alert');
    // withdrawAlert.innerText='You can not withdraw more than balance...';
    // return
    // }




    // if(withdrawInputText > 0 && withdrawInputText < balancePreviousNumber){
        
    //     const withdrawAlert= document.getElementById('withdraw_alert');
    //     withdrawAlert.innerText='Welcome! your withdraw successfully Done...';
    //     withdrawAlert.style.color='#00FF00';
    //     }
    // else if(withdrawInputText <=0){
    //     const withdrawAlert= document.getElementById('withdraw_alert');
    // withdrawAlert.innerText='Please provide a valid amount...';
    // withdrawAlert.style.color='#ff4c4c';

    // return
    // }else if(withdrawInputText > balancePreviousNumber ){
    //     const withdrawAlert= document.getElementById('withdraw_alert');
    // withdrawAlert.innerText='You can not withdraw more than balance...';
    // withdrawAlert.style.color='#ff4c4c';
    // return
    // }else{
    //     const withdrawAlert= document.getElementById('withdraw_alert');
    // withdrawAlert.innerText='Please Do not provide an empty amount...';
    // withdrawAlert.style.color='#ff4c4c';
    // return
    // }
})