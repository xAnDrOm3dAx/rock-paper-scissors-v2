# Rock Paper Scissors - The Odin Project

The Odin Project - Foundations Course

Project: Rock Paper Scissors solo project revision 1

## Live Site:

https://xandrom3dax.github.io/rock-paper-scissors/

## Revision 1:

Technologies Used: Javascript

Introduction: We’re going to make a simple implementation of grade-school classic “rock paper scissors”. For the moment we’re just going to play the game from the browser console, but we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text, so don’t forget to keep the code on GitHub! You might notice some ‘Live Preview’ links in the student solutions that have a GUI - this is coming in a later lesson. When you get there don’t forget to come back and add your link!

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

Phew - that was a mission! I started this challenege feeling quite overwhelmed. With not much coding practice, I had to supplement with a free javascript course by scrimba and a few RPS tutorials to try and understand the problem. Many days later, I am happy with the outcome. I can undertand the relation between all the funcytions and how they work, I learnt how to utilise for and while loops and my confidence got a tiny boost.

I am still very much struggling with breaking down the problem, writing pseudocode and understanding Javascript concepts and when to use them. #workinprogress

Onwards and upwards.

## Discord Feedback

1. Great job 😄
   In getPlayerChoice if you return in the loop you probably don't need to set playerInput to true.
   And in game when incrementing the scores you can just check on Player or Computer given how you send the result.

But these are very minor and this RPS is really good 😁

2. Semicolons ; you neglect adding them, and while it's true that your code will probably work just fine without them we still add them for the edge cases where it doesn't work.

lines 25-26:
playerInput = true;
return inputInLower

you change the playerInput value to true to stop the while loop from running but in the line afterwards you exit the function completely with the return statement, changing the playerInput is redundant.

lines 87-93:
console.log("-----------------------------------");
console.log(`Round ${round}`);
console.log("Computer chose:" + " " + computerSelection);
console.log("Player chose:" + " " + playerSelection);
console.log(`${result}`);
console.log(`Player Score: ${playerScore}`)
console.log(`Computer Score: ${computerScore}`)

you mix up several ways of printing variables, sometimes you use back ticks and some times you're adding strings together. pick one and be consistent with it, back ticks should give you the best readability for printing text with variables.

lines 67-75, if it's not needed and you decided to go with other solution then delete it it's just noise.

Beside those small things (and they're indeed small things) the code looks good, well organized, the variables have good and clear names and the logic is very straight forward and easy to follow well done @Christopher Werkmeister ++ 🙂

There's dedicated channels for feedback ⁠creations-showcase ⁠feedback-trading so consider those for next projects 🙂

## Revision 2:

Technologies Used: Javascript, HTML5, CSS3

Introduction: Revisiting this project to add a UI and make the game interactive.

## Lessons Learned

1. I am starting to get comfortable with Javascript. Taking some time to think about the problem, finding solutions via google & chat GPT, and implementing them on my own. I am feeling a lot more comfortable with using other solutions and modifying them to work for my projects, accepting this is a normal part of programming and that everyone does it.
2. I learned more about media queries and how/when to use them.
3. Taking what I learned in the DOM Manipulation module of TOP and putting it into practice.
4. My code is far from efficient, chat GPT is gold when it comes to optimizing snippets.
