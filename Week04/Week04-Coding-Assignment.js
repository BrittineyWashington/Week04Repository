console.log("Week 04 Coding Assignment");

console.log('Question 1:	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.' + 
'a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array.' + 
'	Do not use numbers to reference the last element, find it programmatically' + 
'	ages[7] - ages[0] is not allowed!' + 
'b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).' + 
'c.	Use a loop to iterate through the array and calculate the average age.'); 

//the array called ages 
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a. I did this to double check what the length was of the array- console.log(ages.length-1);
// Answer to a: use .length-1 for programmatic end and not just the last position of the array in case you add other elements 
console.log("A1a: The value of the last element minus the first element is", ages[ages.length-1] - ages[0]);

// Answer to b. push the new number to the array called ages and then console.log to make sure it worked 
ages.push(15); 
console.log("A1b: The new value of the last element minus the first element is", ages[ages.length-1] - ages[0]);

//Answer to c. //output should be 27.222222 
var sum = 0;
var count = ages.length
function average(ages){
    for(let i = 0; i < count; i++){
        sum += ages[i]; 
    }
    return sum / count;
};
console.log("A1c: The average of this array is " + average(ages)); 


//Question 2:	
console.log("Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' + 'a: Use a loop to iterate through the array and calculate the average number of letters per name' + 'b: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces'"); 
// the array called names 
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Answer to a: potentially use a forEach()
let characterSum = 0; 

names.forEach(name => {
    characterSum += name.length;
    // console.log("the length of this name is " + name.length);
    // console.log("the current character sum now is " + characterSum);
    return characterSum / name.length; 
});
// console.log("final character sum is " + characterSum); //output is 23

//total characters including '' and spaces- 45 characters 

let average1 = characterSum/names.length
console.log("A2a: The average number of letters per name is " + average1); //expected output should be 23/6= 3.83333


//Answer for 2b 

// var newNames = [names.toString()]; This var is not needed. 
// console.log(newNames); //see if [names.toString()] is an array 

console.log("A2b: Here are all the names added together " + names.join(' '));




console.log("Question 3: How do you access the last element of any array?");
let answerQuestionThree = "A3: You can do this by using the .length property. Since the array count starts at 0, you can use .length-1 to access the last element of any array thereby allowing you to always access the last element no matter the changing length of the array.";  

console.log(answerQuestionThree); 



console.log("Question 4:	How do you access the first element of any array?");
let answerQuestionFour = "A4: You can do this by using arrayName[0] since we know that the array count starts at 0 index.";

console.log(answerQuestionFour);




//Question 5.	
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

console.log("Question 5: Create a new array called nameLengths, Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."); 

// var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //array from Q2. 

const nameLengths = []//created new array name 

    names.map((names) => {
       //use the .map feature 
        nameLengths.push(names + ": " + names.length)
//this line is used to push the elements from the array called names plus their lengths to the new array called nameLengths
        // return nameLengths //don't need this line of code. 
    })
        
console.log('A5 Here is the new array with the names and lengths included ', nameLengths); 



console.log("Question 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array."); 
  
// var nameLengthsSum = names.length; 
// for (let i = 0; i < nameLengthsSum; i++){
//     console.log(names[i]);
// }//output Sam
//Tommy
//Tim
//Sally
//Buck
//Bob

// console.log('6A what does this print? ', nameLengthsSum.length);//6A what does this print? undefined

// let sumOfNameLength = names.reduce((x,y) => x + y);
// console.log('6A 3rd attempt ', sumOfNameLength);//output 6A 3rd attempt SamTommyTimSallyBuckBob 


let sumOfNameLength=nameLengths.reduce((x,y) => x + y); 
// console.log('6A 4th attempt ', sumOfNameLength);//output: 6A 4th attempt  Sam: 3Tommy: 5Tim: 3Sally: 5Buck: 4Bob: 3

console.log('A6: The total sum of all the elements including ":" and the length is', sumOfNameLength.length);

// console.log('6A what does this print?', sumOfNameLength.length);//output 6A what does this print? 23 
//this is the total amount of just the elements with no : or length. 


// let nameLengthsSum = 0; 
// for (let i = 0; i < names.length; i++){
//     nameLengthsSum += names[i];
// }
// console.log('6A 1st attempt', nameLengthsSum);//output 6A 1st attempt 0SamTommyTimSallyBuckBob 

//  console.log(nameLengthsSum); //output Uncaught TypeError, nameLengths.split is not a function


console.log("Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times, ie if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'");
//** Look at the video on functions week 4- near the end he did an example of this code. 

let someFunction = (word, n) => {
let answer = ''; 
for (let i = 0; i < n; i++){
answer += word;
	}
return answer; 
}; 

// console.log("A7: Here is what the function looks like let someFunction =", someFunction); //Tested to see if it would print out the actual function code. 

console.log("A7: Here is the example case", someFunction('Brittiney',3)); //test console to see if the function works

// //case1: output should be 'HelloHelloHello'
// console.log(someFunction('Hello',3));
// //case2: output should  be 'GoodbyeGoodbyeGoodbye'
// console.log(someFunction('Goodbye',3));
// //case3: output should be 'WashingtonWashingtonWashingtonWashington' 
// console.log(someFunction('Washington',4))





console.log("Question 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("A8: Here is the full name", createFullName('Brittiney', 'Washington')); 
//arrow functions allow for shorter syntax for basic functions, this is why I went with this line of code versus 


console.log("Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."); 
//Look at notepad on the classes week 04 there is an example there. 

var numbers = [2, 15, 12, 29, 21];


function sumOfNumbers(numbers){
    let sum = 0;
    for(let i = 0; i <numbers.length; i++){
         sum += numbers[i];
         //learned to close this out before proceeding to the next part, every case was false and only reading the first number in the array. 
        } if(sum > 100){
            return true;
        } else {
            return false;
        }    
    }
    
    console.log("A9:If the sum of the numbers in the array is greater than 100 it will be true, the sum is ", sumOfNumbers(numbers), "this is not greater than 100.");

//case1: 
// var numbers1 = [81, 26, 14, 6, 5];
// console.log("test a9: ",sumOfNumbers(numbers1)); 

// // case2: 
// var numbers2 = [45, 38, 90, 63, 07];
// console.log("test a9: ", sumOfNumbers(numbers2));

// //case3: 
// var numbers3 = [0, 8, 20, 19, 49]; 
// console.log("test a9: ", sumOfNumbers(numbers3)); 




console.log("Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function findAverage(averageArray){
    let sum = 0; 
    for (let i = 0; i < averageArray.length; i++){
        sum += averageArray[i];
    }
    return sum / averageArray.length; 
}

const averageArray = [2, 4, 6, 8, 10];

console.log("A10: The average of all the numbers in the array is ", findAverage(averageArray)); //This output should be 6. 

// //case 1: output should be: 300
// const averageArray1 = [100, 200, 300, 400, 500]; 
// //case 2: output should be: 15
// const averageArray2 = [5, 10, 15, 20, 25];
// //case 3: output should be: 46
// const averageArray3 = [63, 84, 7, 18, 58]; 
// console.log("A10 Cases: The average of all the numbers in the array is ", findAverage(averageArray3));




console.log("Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

const agesOfNephews = [5, 8, 18, 18, 21]; 
const agesOfNieces = [12, 19, 21]; 

let totalNephews = 0
let totalNieces = 0

function isGreater(nephews, nieces){
    for(let i = 0; i < nephews.length; i++){
        totalNephews += nephews[i] / nephews.length;
    }//this forLoop allows me to calculate the average of ageOfNephews
    for(let i = 0; i < nieces.length; i++){
        totalNieces += nieces[i] / nieces.length;
    }//this forLoop allows me to calculate the average of ageOfNieces
    if (nephews > nieces){
        return true;
    } else {
        return false; 
    }//This if else statement compares the average ages of nephews vs nieces to see if it's greater and return true or false
}

console.log(("A11: Is the average age of nephews greater than the average age of nieces? "), isGreater(agesOfNephews, agesOfNieces));





console.log("Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

var isHotOutside =  75 == true; 
var moneyInPocket = 20; 

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true || moneyInPocket > 10.50){
        return true;
    } else{
        return "I will not buy a drink!";
    }
}

console.log('A12 Will I buy a drink? ', willBuyDrink(80,20));//output A12 true 
//these variables isHotOutside = 75 == true

// console.log('A12 case1 ', willBuyDrink(70,10));//output A12 case1 I will not buy a drink
// //these variables in case1 isHotOutside = 75 == true

// console.log('A12 case2 ', willBuyDrink(77,10));//output A12 case2 I will not buy a drink 
// //these variables in case2 isHotOutside = 75 == true

// console.log('A12 case3 ', willBuyDrink(105,15));//output A12 case3 true
// //these variables in case3 isHotOutside = 100 == true



console.log("Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it."); 
console.log("'Q13: My function Will I cut the grass today? Write a function called willCutGrass, that takes a boolean isItHot, and a number isGrassHigh, and returns true if it is not too hot and if the grass is higher than 6 inches."); 

var isGrassHigh = 6; 
var isItHot = 80; 

function willCutGrass (isGrassHigh,isItHot) {
    if(isGrassHigh >= 6 && isItHot <= 75){
        // console.log('test 1 true');
        return true;
    } else {
        return "Yay! I get a day off, no cutting the grass for me!!";
    }
}

console.log("A13 Will I cut the grass today? ", willCutGrass()); 


// console.log('13A case 1 ', willCutGrass());
// //expected outcome: 13A case 1, undefined
// //output: 13A case 1 Yay! I get a day off, no cutting the grass for me!! 

// console.log('13A case 2: ', willCutGrass(7, 75));
// //expected output: 13A case 2:  Yay! I get a day off, no cutting the grass for me!!
// // output: 13A case 2: true 

// console.log('13A case 3: ', willCutGrass(3, 80));
// //output: 13A case 3:  Yay! I get a day off, no cutting the grass for me!! 

// console.log('13A case 4: ', willCutGrass(6,85));
// //expected outcome: Yay! I get a day off, no cutting the grass for me!!
// //output: 13A case 4: Yay! I get a day off, no cutting the grass for me!!

// console.log('13A case 5: ', willCutGrass(6,75));
// //expected outcome: true
// //output: 13A case 5true

// console.log('13A case 6: ', willCutGrass(8,70)); 
// //expected outcome: true
// //output: 13A case 6

// console.log('13 want to see what isItHot prints out ', isItHot);//expected output: 13 want to see what itIsHot prints out 80