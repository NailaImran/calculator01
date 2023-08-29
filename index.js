#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation');
    await sleep();
    rainbowTitle.stop();
}
welcome();
let { num1, num2, operator } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter your first number",
    },
    { name: "num2",
        type: "number",
        message: "enter your second number",
    },
    {
        name: "operator",
        type: "list",
        choices: ["multiplication", "subtraction", "addition", "division"],
        message: "enter valid number",
    }
]);
if (operator === "addition") {
    console.log(`the sum of two numbers =${num1 + num2}`);
}
else if (operator === "subtraction") {
    console.log(`the difference of two numbers =${num1 - num2}`);
}
else if (operator === "multiplication") {
    console.log(`the product of two numbers =${num1 * num2}`);
}
else if (operator === "division") {
    console.log(`the dividant of two numbers =${num1 / num2}`);
}
