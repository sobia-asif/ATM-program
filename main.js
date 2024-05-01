#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPinNumber = 1234;
//pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: 'enter your pin',
        type: "number"
    },
]);
if (pinAnswer.pin === myPinNumber) {
    console.log("correct pin code !!!");
    //choose option 
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: 'please select option',
            type: "list",
            choices: ["withdraw", "check balance",]
        },
    ]);
    //withdraw option
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your withdraw amount",
                type: "number"
            }
        ]);
        //insufficient bal 
        if (amountAns.amount > myBalance) {
            console.log(chalk.redBright("\n \tInsufficient Balance\n"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}`);
            console.log(`your remaining balance is ${+myBalance}`);
        }
    }
    //bal check
    else if (operationAns.operation === "check balance") {
        console.log(`your Account Balance is : ${myBalance}`);
    }
    //fastcash
    let cashAns = await inquirer.prompt([
        {
            name: "fastCash",
            message: 'please choose fastcash option ',
            type: "list",
            choices: [500, 1000, 2000, 5000, 10000]
        },
    ]);
    myBalance -= cashAns.fastCash;
    console.log(`your remaning Balance is : ${myBalance}`);
}
//incorrect pin
else {
    console.log(chalk.blue("\n \tPin is incorrect, Try Again\n"));
}
