// first file our server goes into. this is the default file
// these are the ones we installed earlier in the terminal, now we are importing
const express = require('express');
const cors = require('cors');
const app = express();

// creating the router (A)
const UserRouter = require('./routes')

// we creating app where in we're gonna use these codes
app.use(cors());

// what we gonna use which is json / middleman
app.use(express.json());

//the UserRouter is also the ones we used in the (A)
app.use('/3b', UserRouter);

// then we create a new mini function where in we consoling function
// to also check if restfull api is runing
app.listen(5000, ()=>console.log('PORT 5000 IS RUNNING'));