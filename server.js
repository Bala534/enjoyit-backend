let express = require('express')
let app = express()
let mongojs = require('mongojs')
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('welcome to enjoyit')
})

app.post('/signup', (req,res) => {
    let data = {
        fname: req.body.fname,
        lname: req.body.lname,
        mail: req.body.mail,
        pswd: req.body.pswd
    }
    res.send(data)
})

app.post('/signin', (req,res) => {
    let data1 = {
        mail: req.body.mail,
        pswd: req.body.pswd
    }
    res.send(data1)
})

app.listen(8000,(req,res)=>{
    console.log('running')
})
