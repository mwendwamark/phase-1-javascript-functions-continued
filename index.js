// code your solution here
function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {

   return `This Monday, I will ${task}.`;

}

function outer(greeting, msg = "It's a fine day to learn") {
   
   const innerFunction = function (name, lang = "Python") {
      
      return `${greeting}, ${name}! ${msg} ${lang}`; 
   };

   return innerFunction("student", "JavaScript"); 
}


function wrapAdjective(symbol = "*") {

   return function inner(param = "special") {

      return `You are ${symbol}${param}${symbol}!`;

   };
}

