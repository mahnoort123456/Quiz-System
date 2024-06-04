#! /usr/bin/env node 

import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bold.yellowBright("*********** WELCOME TO QUIZ GAME *************"));

const  name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    }
]);

const quiz = await inquirer.prompt([
    
        {
            name: "q1",
            type: "list",
            message: "An algebraic expression that contains only one term is called?",
            choices: ["Monomial" , "Binomial" , "Trinomial" , "None of the above"],
        }
    
]);
   
if(quiz.q1 == "Monomial") {
    console.log(chalk.bold.green(`${quiz.q1}: Is The Correct Answer`));

}else{console.log(chalk.bold.red(`Wrong Answer!`))};


const quiz2 = await inquirer.prompt([
    
    {
        name: "q2",
        type: "list",
        message: "The general form of abc is:",
        choices: ["100a + 10b + c" , "100b + 10c + a" , "100c + 10a + b" , "None of the above"],
    }
]); 

if(quiz2.q2 == "100a + 10b + c") {
    console.log(chalk.bold.green(`${quiz2.q2}: Is The Correct Answer`));

}else{console.log(chalk.bold.red(`Wrong Answer!`))};

const quiz3 = await inquirer.prompt([
    
    {
        name: "q3",
        type: "list",
        message: `"Mohabbat ma nahi haan farq jeena or maarne ka ossi ko dekh kr jeety haan jis kafir pr daam nikaly" Who wrote this poetry?`,
        choices: ["Allama Iqbal" , "Faiz Ahmed Faiz" , "Mirza Ghalib" , "None of the above"],
    }
]); 

if(quiz3.q3 == "Mirza Ghalib") {
    console.log(chalk.bold.green(`${quiz3.q3}: Is The Correct Answer`));

}else{console.log(chalk.bold.red(`Wrong Answer!`))};


const quiz4 = await inquirer.prompt([
    {
        name: "q4",
        type: "list",
        message: " What is TypeScript?",
        choices: ["JavaScript framework", "database management system" , "programming language" , "superset of JavaScript"],
    }
]);

if(quiz4.q4 == "superset of JavaScript") {
    console.log(chalk.bold.green(`${quiz4.q4}: Is The Correct Answer`));

}else{console.log(chalk.bold.red(`Wrong Answer!`))};

let quiz5 = await inquirer.prompt(
    [
        {
            name :"q5",
            message : "What extension is used for TypeScript files?",
            type :"list",
            choices:["a) .js","b) .ts","c) .txt","d) .html"]
        }
    ]
)
if (quiz5.q5 == "b) .ts" ){
    console.log(chalk.bold.green(`${quiz5.q5}: Is The Correct Answer `));
    
}else{
    console.log(chalk.red.bold(`Wrong Answer!`))};



  
console.log(chalk.bold.red("!!!!!!!!!!!!!!GAME OVER!!!!!!!!!!!!!"));
