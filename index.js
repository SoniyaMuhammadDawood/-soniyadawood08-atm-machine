#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 1234;
console.log(" Welcome to the ATM Machine!");
console.log(" Hint: Pin is '1234' ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Your pin code is correct!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAnswer.amount;
        console.log("Your remaining balance is :" + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("Your balance is : " + myBalance);
    }
}
else {
    console.log("Your pin code is incorrect!!");
}
