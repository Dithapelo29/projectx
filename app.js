const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const appUserRoute = require('./routes/appUser');
const homePageRoute = require('./routes/homePage');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(appUserRoute);
app.use(homePageRoute);

app.listen(3000);