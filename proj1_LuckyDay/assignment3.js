//declare money
var money = 50;

var bank = document.getElementById("money");
var result = document.getElementById("result");
var die = document.getElementById("die");
var even = document.getElementById("even");
var odd = document.getElementById("odd");
var again = document.getElementById("again");
var dice = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png']

bank.innerHTML = "Your bank: $" + money;

  even.onclick=function(){
    var roll = parseInt( Math.random() * 6+1 );
    die.setAttribute('src', dice[roll-1]);
    if(roll%2==0){
      money = money+10;
      bank.innerHTML = "Your bank: $" + money;
      result.innerHTML = "You chose EVEN - you WIN!";
      even.style['display']='none';
      odd.style['display']='none';
      again.classList.remove('hidden');
    }
    else{
      money = money-10;
      bank.innerHTML = "Your bank: $" + money;
      if(money<=0){
        result.innerHTML = "No more money! Refresh!";
        even.style['display']='none';
        odd.style['display']='none';
      }
      else{
        result.innerHTML = "You chose EVEN - you LOSE!";
        even.style['display']='none';
        odd.style['display']='none';
        again.classList.remove('hidden');
      }
    }
  }

  odd.onclick=function(){
    var roll = parseInt( Math.random() * 6+1 );
    die.setAttribute('src', dice[roll-1]);
    if(roll%2!=0){
      money = money+10;
      bank.innerHTML = "Your bank: $" + money;
      result.innerHTML = "You chose ODD - you WIN!";
      even.style['display']='none';
      odd.style['display']='none';
      again.classList.remove('hidden');
    }
    else{
      money = money-10;
      bank.innerHTML = "Your bank: $" + money;
      if(money<=0){
        result.innerHTML = "No more money!";
        even.style['display']='none';
        odd.style['display']='none';
      }
      else{
        result.innerHTML = "You chose ODD - you LOSE!";
        even.style['display']='none';
        odd.style['display']='none';
        again.classList.remove('hidden');
      }
    }
  }

  again.onclick=function(){
    die.setAttribute('src', 'dice-unknown.png');
    result.innerHTML = "Game Result";
    even.style['display']='inline';
    odd.style['display']='inline';
    again.classList.add('hidden');
  }
