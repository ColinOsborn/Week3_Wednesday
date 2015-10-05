// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
console.log("Question 1.");
function minimum(num1, num2) {
  if(num1 < num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
console.log(minimum(3,9));
// 2. Create a new function called minimum3() to find the smallest of three numbers
console.log("Quesion 2.");
function minimum3(num1, num2, num3) {
  if(num1 < num2 || num1 < num3) {
    console.log(num1);
  } else if(num2 < num1 || num2 < num3) {
    console.log(num2);
  }  else (num3 < num1 || num2 < num3)
  }

console.log(minimum3(10, 3, 8));

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log("Question 3.");
function sum(array1) {
  var myTotal = eval(array1.join('+'));
  return myTotal;
}
console.log(sum([1, 2, 3, 4]));
// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log("Question 4.");
function multiply(array1) {
  var multArray = 1;
  for (i=0; i<array1.length; i++) {
    multArray = multArray * array1[i];
  }
  return multArray;
}
console.log(multiply([1, 2, 3, 4]));
// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.
//// Imperative way
console.log("Question 5")
      // var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
      // function filterSixPlus(words) {
      //   for (i=0; [i]words.length < 6; i++) {
      //     return words;
      //   }
      // }

      var words = ["window", "table", "barstool", "glass", "charger", "outlet"];
      function filterSixPlus(words) {
          return words.filter(words => words.length >= 6);
      }

      console.log(filterSixPlus(words));

//console.log(filterSixPlus(words));
// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
/// problem: convert temp to Fahrenheit.
/// solution: function to convert temp to Fahrenheit
//input: my temp, --- var temp
   /// prompt user for temp.
   /// take number from prompt and plug it into an equation, Fahrenheit conversion
///output: temp to Fahrenheit ------ return!

console.log("Question 6");
function convertTemp() {
  var tempChange = prompt("Please enter a temperature in Celsius");
  return ((tempChange * 9) / 5) + 32;
}
convertTemp();

/// input to be, output to be!!!!
// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
console.log("Question 7");
function convertTempToCorF() {
  var tempChange = prompt("Please enter a temperature");
  var CorF = prompt("Celsius or Fahrenheit?");

  if(CorF === "Fahrenheit") {
  return ((tempChange * 9) / 5) + 32;
} else {
  return ((tempChange - 32) * 5) / 9;
}
}
console.log(convertTempToCorF());

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()


// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
      var string = "Soon you will master functions!";

// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
