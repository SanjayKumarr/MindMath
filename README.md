# MindMath


MindMath is an interactive approach by which users of age 9 and above can learn speedy math tricks (also called as Vedic math) and do the math as fast as a calculator. The user can play MindMath for about 15 - 20 minutes a day to learn and practice a new trick. After which the user can take up a challenge with a calculator and validate their learning and also improve their speed. They can also revisit any completed trick and play them at any point in time.

To start with, we have 8 tricks added to the activity.

Users will have options to 
* Learn a random trick and practise it.
* Revisit any trick and learn it.
* Challenge the calculator on a specific/random trick(s).

##### Welcome screen:

![Welcome screen](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/Menu.png)

***

## Math tricks in the activity

We have included 8 tricks in the activity to start with. More tricks can be added easily. There is a guide to adding more math tricks aided by a separate branch with each commit referring to a step in the inclusion process.

##### Tricks list:

![Show all tricks](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/TricksList.png)

***

## Learning a math trick.

When a user attempts to learn a random trick, he/she will be given an option to learn the trick or to try it in case if he/she is already familiar with it. 

The learning module will take the user through every individual step of the trick added with an example below for a better understanding. The user can learn it as many times as he/she wants.

For those curious minds hitting this module and willing to know the math behind any of the math trick, there is an option called "Curiosity clicks!" which will take him/her to another module that explains the complete math behind that particular trick.

##### Learning module:

![Learning a trick](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/LearnTrick.png?raw=true)

##### Curiosity clicks module:

![Curiosity click](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/CuriosityClick.png?raw=true)

***

## Practise a trick.

After the user learns the trick along with the mathematical reasoning behind it, he/she can practise it in the "Let me try the trick" module. In this module, the user will be aided with clues to answer the questions rightly. On answering a question rightly, he/she will be given 10 lollipops. The more lollipops you get in less time, the more you become proficient in doing mind math. 

##### Playing a trick:

![Play](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/Play.png?raw=true)

***

## Calculator challenge.

Once the user becomes comfortable with the math tricks and has practised it well enough, he/she will be capable of performing math calculations quicker than any other human using the calculator to answer the same math problem. The other one using the calculator has to enter the values in it and get the answer while the user who is familiar with the math tricks can do it a lot quicker.

This module(on a smaller scale) is inspired by a talk given by Arthur Benjamin who promotes Mathemagics and challenges the calculator in performing calculations. This [video](https://www.youtube.com/watch?v=e4PTvXtz4GM&ab_channel=TEDxTalks) is one among them.

Based on the above idea, calculator challenge is a module that helps the user test his/her ability to perform quick math and improve his/her speed.

##### Calculator challenge:

![Calculator challenge](https://github.com/SanjayKumarr/MindMath/blob/master/assets/screenshots/CalcChallenge.png?raw=true)


***

## Developer Zone

One can contribute to this web based sugar activity in many ways. One easy way to start with is to help in adding a new math trick to the activity.

### Adding a new trick to the activity. [[add-new-trick branch](https://github.com/SanjayKumarr/MindMath/tree/add-new-trick)]

If you have an exciting and simple math trick, you're most welcome to add it to the MindMath activity. An inclusion of your math trick to the activity is very simple. You may please follow the below steps and can add your trick to the activity in few minutes.

##### 1) Add your trick to the list of tricks.

* You have to add your trick to the `tricksList` array in the `tricksList.js` file. 
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/037fc4171b49c9cab6e43627bfc4a64dfd90bf4c).

##### 2) Prepare the question and add it to the questions array.

* Add your trick in the form of a question to the displayed to the user.
* Add it to the `homework_questions` array in the `questionDisplay.js`.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/93f0d8f6741ffcd237f597fce8114f33ae07bf68).

##### 3) Adding the trick explanation and an example.

* Add your trick explanation as steps to the `all_tutorial_steps` object as a key value pair.
* Also, add an example corresponding to your explanation in the `all_example_steps` object as a key value pair.
* Please refer this [commit](https://github.com/SanjayKumarr/MindMath/commit/57297e57f5940c2e19cb63a711cbee6e8c750e92).

##### 4) Adding the detailed explanation of the trick.

* Add the detailed math behind the math trick you are willing to include in the activity.
* Put it as small steps to the `all_explanation_steps` object as a key value pair.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/3782c8a45f768114b2cd4ac246b7d95997ae024f).

##### 5) Adding it to the play screen.

* When you click on "Let me try the trick" button, you head to play state where user practices a trick.
* For which, you need to generate a question and verify the user entered answer.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/a3f45da8ff9b34444d870d61a7940156a3c6e909).

##### 6) Including the trick to the calculator challenge module.

* This is very similar to the last step.
* You need to generate a question to get displayed and also verify the answer.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/f2cfbf7d1d7e3ef710607c76846032c9ba770280).


Apart from that, you may also contribute in improving the overall activity. We have used [Phaser](https://phaser.io/) game framework to develop the activity.

We have organized the code using phaser states. i.e., Each screen in the game represents a state in Phaser and the changes can be made in it. We have multiple screens in the game and so multiple states. A screenshot of each screen with the same name as the state is available in the assets/screenshots folder available to anyone to easily start hacking with the activity.

***

## Contributors


**Mentor: Tony Anderson**

**Repository: [MindMath](https://github.com/SanjayKumarr/MindMath/)**

Student: [Sanjay Kumar](https://github.com/SanjayKumarr/)

***











