#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("\n\t=====>>HELLO THERE! BEST OFF LUCK FOR THE QUIZzz<<=====\t\n"));

const quiz: {
    quest_01: string;
    quest_02: string;
    quest_03: string;
    quest_04: string;
    quest_05: string
} = await inquirer.prompt(
    [
        {
            name: "quest_01",
            type:"list",
            message: (chalk.yellow("1. Which command is used to install TypeScript via npm?")),
            choices: ["a) npm get typescript","b) npm install typescript","c) npm build typescript","d) npm create typescript"]
        },
        {
            name: "quest_02",
            type: "list",
            message: (chalk.yellow("2. How do you declare a variable with a specific type in TypeScript?")),
            choices: ["a) let variable: type = value;",
                "b) var variable = type value;",
                "c) variable = type value;",
                "d) type variable = value;"]
        },
        { 
            name: "quest_03",
            type: "list",
            message: (chalk.yellow("3. What is the default value of an uninitialized variable in TypeScript?")),
            choices: ["a) '0'" , "b) null","c) undefined","d) NaN"]
            
        },
        {
            name: "quest_04",
            type: "list",
            message: (chalk.yellow("4. Which TypeScript feature allows you to use types as values?")),
            choices: ["a) Type assertion","b) Type alias",") Type inference","d) Type guards"]
        },
        {
            name: "quest_05",
            type: "list",
            message: (chalk.yellow("3. Which of the following is NOT a primitive data type in TypeScript?")),
            choices: ["a) string", "b) number", "c)boolean", "d)class"]
        }

    ]
);

let score: number = 0;

switch(quiz.quest_01){
case "b) npm install typescript":
    console.log(chalk.green("1. Correct!"));
    score += 2;
    break;
    default:
        console.log(chalk.red("1. Incorrect!"));
}

switch(quiz.quest_02){
    case "a) let variable: type = value;":
        console.log(chalk.green("2. Correct!"));
        score += 2;
        break;
        default:
            console.log(chalk.red("2. Incorrect!"));
    }

switch(quiz.quest_03){
    case "c) undefined":
        console.log(chalk.green("3. Correct!"));
        score += 2;
        break;
        default:
            console.log(chalk.red("3. Incorrect!"));
    }

switch(quiz.quest_04){
    case "b) Type alias":
        console.log(chalk.green("4. Correct!"));
        score += 2;
        break;
        default:
            console.log(chalk.red("4. Incorrect!"));
    }

switch(quiz.quest_05){
    case "d)class":
        console.log(chalk.green("5. Correct!"));
        score += 2;
        break;
        default:
            console.log(chalk.red("5. Incorrect!"));
    }

    console.log(chalk.blue(`You Secured ${score} Marks`));
    
    
