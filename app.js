const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('dev'));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const data = [
    {id:1, mat:[1,2,3]}
]

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/json', (req,res) => {
    res.send(data);
})

app.post('/json', (req,res) => {
    const json = {
        id : data.length + 1,
        mat : req.body.mat
    }
    data.push(json);
    res.send(json)
})

app.listen(1000, () => console.log('Listening on port 1000'));

module.exports = app;