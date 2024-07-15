// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)

//setTimeout
setTimeout(() => {//callback function
  console.log('Bye Prasanna')
}, 3000)

console.log(__filename)

setInterval(() => {//callback function 
  console.log('hello world')
}, 1000)