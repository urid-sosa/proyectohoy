require ('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const models = require('./models');
const routes = require('./routes');

models.sequelize.authenticate()
.then(()=> console.log("BD conectada"))
.catch((error)=> console.error(error));

const app = express();
app.set('port',process.env.APP_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.enable('trust proxy');

app.use('/', routes());


app.listen(process.env.PORT );

app.listen(app.get('port'), () => {
    console.log(`up and running on port  ${app.get('port')}`);
});