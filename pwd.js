const pwd = require('wifi-password')

pwd().then((password)=>{
    console.log(password)
}).catch((error)=>{
    console.error(error)    
})