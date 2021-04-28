console.log("hi Friends");

//localModule
//coreModule       ->node document
//ThirdPartyModule ->npm ex: npm install nodemon

//localModule
const global = require('./one');

global.myFunc();
console.log(global.x);