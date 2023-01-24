const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Kristina';

app.get('/', (req, res) => {
//   res.send('Hello World, are we in november?')
    res.send(`<h3> what is up, ${ myName }</h3>`)
})

app.get('/show', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});

})

app.get('/ejs', (req,res) => {
    res.render('index');

    // ejs stuff here
})



console.log('in the node console');


app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`)
 })
