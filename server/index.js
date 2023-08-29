const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/userRouter')
const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/v1', router);

const url = 'mongodb://127.0.0.1:27017/auth'
mongoose.connect(url).then(() => {
    console.log('connected to database');
}).catch((error) => {
    console.log('error in connecting to db', error);
});

app.listen(8080, console.log('server running at port 8080'))