
console.log("Start");
const child_process = require("child_process");
console.log("Try here");
const newSpawnedProcess = child_process.spawn("node", ["computation/fibonacci.js"], {stdio: "inherit"});
/*similar to - command node fibonacci.js
asynchronous non blocking */
console.log("End");
