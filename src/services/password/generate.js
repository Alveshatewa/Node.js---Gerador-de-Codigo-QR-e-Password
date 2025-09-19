import chalk from "chalk";
import handle from './handle.js';

async function generatePassword(){

    console.log(chalk.green.bold("\nGerador de Senhas\n"));
    const password = await handle();
    console.log(chalk.white.bold(password));
}


export default generatePassword;