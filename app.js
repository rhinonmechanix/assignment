const express = require('express');
const app = express();

app.use(express.json());

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