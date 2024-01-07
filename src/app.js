const express = require('express');
const cors =  require('cors');


const app = express();
app.use(cors());


const router = require('./routers/router');


app.use(express.json());
app.use('/api/category', router);
app.use('/api/entry', router);


module.exports = app;