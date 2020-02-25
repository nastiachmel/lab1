const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })
app.use("/test", (req, res) => {
    res.send({message: 'pass!'});
    res.end();

});


module.exports = app