const express = require('express');
const app = express();
const port = process.env.port || 3000;
const mongoose = require('mongoose');
const Shift = require('./api/models/shiftmodel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect = ('mongodb://OttoVBismarck:PeppaPig@ds231589.mlab.com:31589/qontact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));
const routes = require('./api/routes/shiftroutes');
routes(app);


app.listen(port);

console.log('qontact API started on port ' + port)
