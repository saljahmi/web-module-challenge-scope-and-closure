// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  counter1 was created in a function with a closure, and used a value defined in the scope of the counterMaker function.
 *  counter 2 was made without one, and uses a value defined globally. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  counter 1, because a function is returned in the counterMaker and that function accesses a value in the scope of the outer funtion. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *  counter2 is preferable when the count variable needs to be accessed throughout the program. 
 *  counter1 is preferable when you don't want the the count value to be reassigned throughout the program (count is protected)
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored 
in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() *3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` 
(from above) and a number of innings and and returns the final score of the game in the form 
of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore( inningScore, innings){
  let score ={
  "Home" : 0,
  "Away" : 0,
}
  for(i=0; i<innings; i++){
      score["Home"] += inningScore();
      score["Away"] += inningScore();
  };
  return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(inningScore, innings) {
  let homeScores = [], awayScores = []; 
  let homeFinal = 0; awayFinal = 0;
  for(i=1; i<= innings; i++){
      homeScores.push(inningScore());
      awayScores.push(inningScore());
      homeFinal+= homeScores[i-1];
      awayFinal+= awayScores[i-1];
      if(i===1){
        console.log( "1st inning: " + awayScores[i-1] + " - " + homeScores[i-1]);
      }
      else if(i===2){
        console.log( "2nd inning: " + awayScores[i-1] + " - " + homeScores[i-1]);
      }
      else if(i===3){
        console.log( "3rd inning: " + awayScores[i-1] + " - " + homeScores[i-1]);
      }
      else{
        console.log(i + "th inning: " + awayScores[i-1] + " - " + homeScores[i-1]);
        
      }
  }
  return "Final Score: " + awayFinal + " - " + homeFinal; 
}

console.log(scoreboard(inning, 9));

// getInningScore- uses inning as cb and returns object with away and home scores