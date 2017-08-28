# Adding a new trick to the activity.

If you have an exciting and simple math trick, you're most welcome to add it to the MindMath activity. An inclusion of your math trick to the activity is very simple. You may please follow the below steps and can add your trick to the activity in few minutes.

### 1) Add your trick to the list of tricks.

* You have to add your trick to the `tricksList` array in the `tricksList.js` file. 
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/037fc4171b49c9cab6e43627bfc4a64dfd90bf4c).

### 2) Prepare the question and add it to the questions array.

* Add your trick in the form of a question to the displayed to the user.
* Add it to the `homework_questions` array in the `questionDisplay.js`.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/93f0d8f6741ffcd237f597fce8114f33ae07bf68).

### 3) Adding the trick explanation and an example.

* Add your trick explanation as steps to the `all_tutorial_steps` object as a key value pair.
* Also, add an example corresponding to your explanation in the `all_example_steps` object as a key value pair.
* Please refer this [commit](https://github.com/SanjayKumarr/MindMath/commit/57297e57f5940c2e19cb63a711cbee6e8c750e92).

### 4) Adding the detailed explanation of the trick.

* Add the detailed math behind the math trick you are willing to include in the activity.
* Put it as small steps to the `all_explanation_steps` object as a key value pair.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/3782c8a45f768114b2cd4ac246b7d95997ae024f).

### 5) Adding it to the play screen.

* When you click on "Let me try the trick" button, you head to play state where user practices a trick.
* For which, you need to generate a question and verify the user entered answer.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/a3f45da8ff9b34444d870d61a7940156a3c6e909).

### 6) Including the trick to the calculator challenge module.

* This is very similar to the last step.
* You need to generate a question to get displayed and also verify the answer.
* Please refer to this [commit](https://github.com/SanjayKumarr/MindMath/commit/f2cfbf7d1d7e3ef710607c76846032c9ba770280).
