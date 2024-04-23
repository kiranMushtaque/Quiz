#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.greenBright("\n    Welcome to the Quiz Game!    \n"));

async function startQuiz() {
  let Quiz_questions = await inquirer.prompt([
    {
      name: "answer1",
      type: "checkbox",
      message: "What name is the Governor of Sindh, Pakistan?",
      choices: ["Kamran Tessori", "Saeeduzzaman Siddiqui", "Ishratul Ibad"],
    },
    {
      name: "answer2",
      type: "checkbox",
      message: "What is TypeScript?",
      choices: [
        "programming language developed by Microsoft",
        "A database management system",
        "A graphic design software",
        "A social media platform",
      ],
    },
    {
      name: "answer3",
      type: "checkbox",
      message:
        "Which tool is commonly used to compile TypeScript code into JavaScript?",
      choices: ["Node.js", "TypeScript Compiler (tsc)", "Microsoft"],
    },
  ]);

  if (Quiz_questions.answer1.includes("Kamran Tessori")) {
    console.log(
      chalk.bgYellowBright(
        "Congratulations! You have selected the correct answer for question 1."
      )
    );
  } else {
    console.log("Sorry, you have selected the wrong option for question 1.");
  }

  if (
    Quiz_questions.answer2.includes(
      "programming language developed by Microsoft"
    )
  ) {
    console.log(
      "Congratulations! You have selected the correct answer for question 2."
    );
  } else {
    console.log(
      chalk.bgRedBright(
        "Sorry, you have selected the wrong option for question 2."
      )
    );
  }

  if (Quiz_questions.answer3.includes("TypeScript Compiler (tsc)")) {
    console.log(
      chalk.bgYellowBright(
        "Congratulations! You have selected the correct answer for question 3."
      )
    );
  } else {
    console.log("Sorry, you have selected the wrong option for question 3.");
  }

  console.log(
    chalk.bgMagentaBright.bold(
      "\n       Thank you for playing Quiz Game!      \n"
    )
  );
}

startQuiz();
