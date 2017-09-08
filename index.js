var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World ")+ chalk.bgBlue(chalk.white("is this thing on?"));
console.log(message);

console.log(chalk.inverse(chalk.bgMagenta("does it work?")));