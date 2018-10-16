const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan')
require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));

const userController = require('./controllers/users');


app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.use('/users', userController);







app.listen(3000, () => {
    console.log("Listening on port 3000")
})