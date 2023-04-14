let express = require('express')
let app = express()
let mongojs = require('mongojs')

app.get('/', (req,res) => {
    res.send('welcome to enjoyit')
})

app.post('/signup', (req,res) => {
    let data = {
        firstname: req.body.fname,
        lastname: req.body.lname,
        email: req.body.mail,
        password: req.body.pswd
    }
    res.send(data)
})

app.post('/signin', (req,res) => {
    let data1 = {
        email: req.body.mail,
        password: req.body.pswd
    }
    res.send(data1)
})

app.listen(8000,(req,res)=>{
    console.log('running')
})
