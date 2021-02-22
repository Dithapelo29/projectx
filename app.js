const express = require('express');
const bodyParser = require('body-parser');

const appUserRoute = require('./routes/appUser');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(appUserRoute);

app.listen(3000);