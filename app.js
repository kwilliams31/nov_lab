const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('Hello World, are we in november?')
})

app.get('/show', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});

})

console.log('in the node console');


app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`)
 })
