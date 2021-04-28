// console.log("hi Friends");

//localModule
//coreModule       ->node document
//ThirdPartyModule ->npm ex: npm install nodemon

//localModule
// const global = require('./one');
//==========export one method===========
// global.myFunc();
// console.log(global.x);

//==========export second method========
// global.fun();
// console.log(global.num);

//==========export third method=========
// global.data();
// console.log(global.number);
// global.dummy();

//==========passing class =============
//  var obj = new global.myClass('rakhav');
//  obj.myFunction()

//CoreModule
const readline = require('readline');
const events = require('events');
const path = require('path');
const fs = require('fs');
const http = require('http');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('what is your name?',(ans)=>{
//     if(ans === 'John'){
//         // rl.close();
//         setTimeout(() => {
//             myEmitter.emit('my')
//             }, 3000);
//     }else{
//         rl.setPrompt("wrong name try again \n");
//         rl.prompt();
//         rl.on('line',(input)=>{
//             if(input === 'John'){
//                 // rl.close();
//                 setTimeout(() => {
//                     myEmitter.emit('my')
//                     }, 3000);
//             }else{
//                 rl.setPrompt(input + 'wrong \n');
//                 rl.prompt();
//             }
//         })
//     }
// })
// rl.on('close',()=>{./
//     console.log("Correct !!!");
// })

// var x =['Pravin','John','Mohan'];
// const myEmitter = new events.EventEmitter();
// myEmitter.addListener('my',()=>{
//     for(let i =0; i<x.length;i++){
//         console.log(i+' '+x[i])
//     }
//     console.log("Oops failed !!!!")
//     rl.close();
// })
// setTimeout(() => {
//     myEmitter.emit('my')
//     }, 3000);

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(`${__dirname}/test/test.js`))

// fs.mkdir('test',(error)=>{
//     if(error){throw error}
//     console.log("Dir Created");
//     fs.writeFile(path.join(`${__dirname}/test/test.js`),'I love Node',(error)=>{
//         if(error){throw error}
//         console.log('File created');
//     })
// })

const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(`${__dirname}/Main/head.html`),'utf8',(err,data)=>{
            if(err){throw err}
            res.end(data);
        })
    }
    if(req.url === '/service'){
        fs.readFile(path.join(`${__dirname}/Main/service.html`),'utf8',(err,data)=>{
            if(err){throw err}
            res.end(data);
        })
    }if(req.url !== '/' && req.url !== '/service'){
            res.end("<h1>Page not found</h1>");
    }
});
const PORT = process.env.PORT || 2500;
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
});