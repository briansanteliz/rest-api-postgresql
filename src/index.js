const express = require('express');

//starting the server
const app = express();
app.listen(8080); 
console.log('server on port 8080');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// routes
app.use(require('./routes/index'));