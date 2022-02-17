document.getElementById('calculate-button').addEventListener('click', function(){
   const income = document.getElementById('income-value').value ;
   const food = document.getElementById('food-value').value ;
   const rent = document.getElementById('rent-value').value ;
   const clothes = document.getElementById('clothes-value').value ;
   const expensesTotal = parseFloat(food) + parseFloat(rent) + parseFloat(clothes) ;
    //chacke the negative number 
    if(income  < 0 || food < 0 || rent < 0 || clothes < 0){
        document.getElementById('negative-number').style.display = 'block';
        document.getElementById('expenses-area').style.display = 'none';
        document.getElementById('no-money').style.display = 'none';
        document.getElementById('balance-area').style.display = 'none';
    }
    // chake the string 
   else if(isNaN(expensesTotal) || isNaN(income) ){
        document.getElementById('enter-number').style.display = 'block';
        document.getElementById('expenses-area').style.display = 'none';
        document.getElementById('no-money').style.display = 'none';
        document.getElementById('balance-area').style.display = 'none';
        document.getElementById('negative-number').style.display = 'none';
   } 
   // chake this numbr income less den expenesesTotal 
   else if(income < expensesTotal ){
        document.getElementById('no-money').style.display = 'block';
        document.getElementById('expenses-area').style.display = 'none';
        document.getElementById('enter-number').style.display = 'none';
        document.getElementById('balance-area').style.display = 'none';
        document.getElementById('negative-number').style.display = 'none';
   }
    // calculate 
  else{
        document.getElementById('expenses-area').style.display = 'block';
        document.getElementById('balance-area').style.display = 'block';
        document.getElementById('enter-number').style.display = 'none';
        document.getElementById('no-money').style.display = 'none';
        document.getElementById('negative-number').style.display = 'none';
  }
  document.getElementById('expenses-total').innerText = expensesTotal ;
  const incomeBalance = income - expensesTotal ;
  document.getElementById('balance').innerText = incomeBalance ;

})

// save handler use 
document.getElementById('save-button').addEventListener('click', function(){
    const saveing = document.getElementById('save-input-value'). value ;
    const income = document.getElementById('income-value').value ;
    const saveingMoney = income /saveing ;
    const totalBalance = document.getElementById('balance').innerText ;
    if( saveing < 0){
        document.getElementById('negative-number2').style.display = 'block';
        document.getElementById('no-saving').style.display = 'none';
        document.getElementById('saving-amount-area').style.display ='none';
        document.getElementById('remaining-balance-area').style.display = 'none';
        document.getElementById('enter-number2').style.display = 'none';
    }
    else if(isNaN(saveing) ){
        document.getElementById('enter-number2').style.display = 'block';
        document.getElementById('negative-number2').style.display = 'none';
        document.getElementById('saving-amount-area').style.display ='none'; 
        document.getElementById('remaining-balance-area').style.display = 'none';
    }
    else if( totalBalance < saveingMoney){
        document.getElementById('no-saving').style.display = 'block';
        document.getElementById('negative-number2').style.display = 'none';
        document.getElementById('saving-amount-area').style.display ='none'; 
        document.getElementById('remaining-balance-area').style.display = 'none';
        document.getElementById('enter-number2').style.display = 'none';
    }   
    else{
        document.getElementById('saving-amount-area').style.display ='block';
        document.getElementById('remaining-balance-area').style.display = 'block';
        document.getElementById('negative-number2').style.display = 'none';
        document.getElementById('no-saving').style.display = 'none';
        document.getElementById('enter-number2').style.display = 'none';
    }
    document.getElementById('saving-amount').innerText = saveingMoney ;
    const remainingBalance = totalBalance - saveingMoney;
    document.getElementById('remainign-balance').innerText = remainingBalance ;

})