const mongoose = require('mongoose')

let URI = 'mongodb://127.0.0.1:27017/education_web_dev'
// let URI = 'mongodb+srv://thaiboi2001:binboong01@thaifirst.s4sfzc7.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try {
        await mongoose.connect(URI)
        console.log('db connect successfully!')
    }
    catch(error){
        console.log('db connect failure!')
    }
}

module.exports = { connect }