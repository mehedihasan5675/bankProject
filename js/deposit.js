 //==========================
//deposite button input get
//============================
document.getElementById('deposit_btn').addEventListener('click',function(){
    const depositInputField=document.getElementById('deposit_input');
   const depositInputTextString =depositInputField.value;
   const depositInputText=parseFloat(depositInputTextString);
//    console.log(depositInputText);
   
   depositInputField.value='';
 //=============================
//validation part
//=============================
if(depositInputText > 0){
    const depositAlert= document.getElementById('deposit_alert');
depositAlert.innerText='Deposit Successfully Done...';
depositAlert.style.color='#00FF00';
}else
{
    const depositAlert= document.getElementById('deposit_alert');
depositAlert.innerText='Please provide a valid amount...';
depositAlert.style.color='#ff4c4c';
return

}

   //=============================
   //deposite money add
   //=============================
   const depositeMoney =document.getElementById('deposit_money');
  const depositePreviousBalanceString=depositeMoney.innerText;
  const depositePreviousBalance=parseFloat(depositePreviousBalanceString);

  const depositeCurrentBalance = depositePreviousBalance + depositInputText;
  depositeMoney.innerText=depositeCurrentBalance;





 
//===================
//add input with All Balance
//===================== 
  const balanceMoney=document.getElementById('balance_input');
  const balancePreviousString =balanceMoney.innerText;
  const balancePreviousNumber=parseFloat(balancePreviousString);

  const balanceCurrentNumber= balancePreviousNumber + depositInputText ;

  balanceMoney.innerText=balanceCurrentNumber;

})