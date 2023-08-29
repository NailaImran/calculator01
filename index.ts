#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";

const sleep =()=>{
    return new Promise((res)=>{
    setTimeout(res,2000);
    })
}

async function welcome() {
   let rainbowTitle = chalkAnimation.rainbow('Lets start calculation');
    await sleep();
    rainbowTitle.stop();    
}
welcome();
let {num1, num2, operator} = await inquirer.prompt([
        {
       name:"num1",
       type:"number",
       message:"Enter your first number",
        },
       { name:"num2",
        type:"number",
        message:"Enter your second number",
    },
    {
        name:"operator",
        type:"list",
        choices:["multiplication","subtraction","addition","division"],
        message:"Enter valid number",
    }
]);

if(operator ==="addition"){
    console.log(`The sum of two numbers =${num1+num2}`)
}
else if(operator==="subtraction"){
            console.log(`The difference of two numbers =${num1-num2}`)
        }
 else if(operator==="multiplication"){
                console.log(`The product of two numbers =${num1*num2}`) }
 else if(operator ==="division"){
                    console.log(`The dividant of two numbers =${num1/num2}`) }
                
