/*
-  input: node process João Paulo
- output: seu nome é João Paulo
*/
/* 
console.log(process.argv);

const firstName = process.argv[2];
const lastName = process.argv[3]; 

console.log(`seu nome é ${firstName} ${lastName}`);
 */


/*
-  input: node process --name "João Paulo" --greeting "tudo bem com você?"
- output: 
*/
const processFunctions = require('./processFunctions');
// console.log(processFunctions.getFlagValue('--greeting'));

const name = processFunctions.getFlagValue('--name');
const greeting = processFunctions.getFlagValue('--greeting');
console.log(`Seu nome é ${name}, ${greeting}`);