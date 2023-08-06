/*************************************************************************************/
    // CREATE SERVER WITH ONLY HTTP MODULE
// const path = require('path')
// const fs = require('fs')
// const http = require('http')

// // create server instance
// let myServer = http.createServer((req, res) => {
//     // file path link to the requested file
//     let filePath = path.join(__dirname, 
//         "public", 
//         req.url == '/' ? "index.html" : req.url
//     );
//     // console.log(filePath)

//     //check extension name for Content_Type
//     let extName = path.extname(filePath);
//     let contentType = 'text/html'

//     switch(extName){
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image.png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//     }

//     // read requested file if exists
//     fs.readFile(filePath, (err, content) => {
//         if (err){
//             if (err.code == 'ENOENT') {
//                 //page not found
//                 fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
//                     res.writeHead(200, {'Content-Type': 'text.html'})
//                     res.end(content, 'utf-8');
//                 })
//             }
//             else {
//                 //some server error
//                 res.writeHead(500);
//                 res.end(`Server Error: ${err.code}`);
//             }
//         }
//         else {
//             //success
//             res.writeHead(200, {'Content-Type': contentType})
//             res.end(content, 'utf-8')
//         }
//     })
// })

// const PORT = process.env.PORT || 5000;  // let port be the environment port or 5000
// myServer.listen(PORT, ()=> console.log(`sever is running on port: ${PORT}`))


/*************************************************************************************/
    // CREATE SERVER WITH EXPRESS
const express = require('express')      // help to create server with http methods easier
const morgan = require('morgan')        // used to show request log whenever a request appear
const handlebars = require('express-handlebars')    // used to create layout for web
// import {engine} from handlebars
const path = require('path');
const app = express()

// set static directory for file search
app.use(express.static(path.join(__dirname, 'public')))

// using morgan for log display 
app.use(morgan('combined')) 

// Template engine usage
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.listen(5000, ()=>console.log('5000'))