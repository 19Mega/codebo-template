window.onload = function() {

  var who_list = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  var who = document.getElementsByClassName('who')[0];
  who.innerHTML = who_list[getRandomNumber(1)];
  
  var action_list = ['ate', 'peed', 'crushed', 'broke'];
  var action = document.getElementsByClassName('action')[0];
  action.innerHTML = action_list[getRandomNumber(2)];
  
  var what_list = ['my homework', 'the keys', 'the car'];
  var what = document.getElementsByClassName('what')[0];
  what.innerHTML = what_list[getRandomNumber(3)];
  
  var when_list = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  var when = document.getElementsByClassName('when')[0];
  when.innerHTML = when_list[getRandomNumber(4)];

  };


function getRandomNumber(number) {
    
  switch(number){
    case 1: 
            let firstRandom = Math.floor((Math.random()*4));
            return firstRandom;

    case 2: let secondRandom = Math.floor((Math.random()*4));
            return secondRandom;

    case 3: let thirdRandom = Math.floor((Math.random()*3));
            return thirdRandom;

    case 4: let fourthRandom = Math.floor((Math.random()*5));
            return fourthRandom;
  }
  
}
