const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Kristina';

app.get('/', async (req, res) => {
//   res.send('Hello World, are we in november?')

    let result = await res.send(`<h3> what is up, ${ myName }</h3>`);
})

console.log("before app dot get to slash ejs", myName);

app.get('/show', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});

})

console.log("in /ejs before render", myName);

app.get('/ejs', (req,res) => {
    res.render('index', { myName: myName } );
                         // ejs: node
    console.log("after res render /ejs", myName);

})

app.get('/name', (req, res) => {
    console.log("in get to slash name: ", req.query.ejsFormName);

})

console.log("after app dot get to slash ejs", myName);

console.log('in the node console');


app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`)
 })
