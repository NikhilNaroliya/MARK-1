const chalk = require('chalk');
var readlineSync = require("readline-sync");
var score = 0;
console.log(chalk.bgCyan(" -------your welcome Iam Nikhil how well do you know me------- \n\n    ----plat hard----\n\n ----------rules----------\n\n --for each correct ans you will get 1 point and for wrong ans you will loose 1 point -- \n\n"))
do {
  var score1 = [], k;
  k = 0;
  function play(question, answer) {
    //   console.log(" here iam")
    var user_ans = readlineSync.question(question);
    if (user_ans === answer) {
      console.log(chalk.green("you are right "));
      score = score + 1;
    }
    else {
      console.log(chalk.red("better luck next time "));
      score = score - 1;
    }

    console.log("-------------------------------------------")
    console.log(chalk.green("your current score is " + score));
    console.log("-------------------------------------------")
    score1[k] = score;
    k++;

  }
  // score1[]
  var questions = [

    {

      question: "what do i like most A->coding B->sleeping C->playing cricket ",
      answer: "A",


    },
    //   console.log("here ima ");
    {
      question: "In which institute do i study A->NIT B->IIT C->IIIT ",
      answer: "A",
    },
    {
      question: "where do i live  A->MP B->Bihar C->Goa ",
      answer: "A",
    },
    {
      question: " what do i Drink most  A->tea B->coffee C->cold drinks",
      answer: "A",
    }

  ];
  //processing
  for (var i = 0; i < questions.length; i++) {
    // console.log("here  iam ");
    var curques = questions[i];
    play(curques.question, curques.answer);
  }
  ans = ["A", "A", "A", "A"]
  console.log(" -------------------\n");
  console.log("--correct ans are --")
  for (var i = 0; i < 4; i++) {
    console.log(chalk.magenta(ans[i]));
  }
  // user ka score aur high score batana
  // max score
  var max = 0;
  for (var i = 0; i < 4; i++) {
    if (score1[i] > max)
      max = score1[i]
  }
  console.log("max score is " + max)
  console.log(" Enter no for exit or press any key to continue ")
  var choice = readlineSync.question("for exit press no or NO ");
  score = 0;
} while (choice != ('no' || 'No'));
