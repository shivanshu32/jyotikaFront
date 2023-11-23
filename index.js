const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
var cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

// app.listen(3001, () => {
//   console.log('Server started on port 3001');
// });

app.listen(process.env.PORT || 3001)