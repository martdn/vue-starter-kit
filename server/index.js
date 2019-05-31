'use strict';

const config          = require('./config');
const routes          = require('./routes');
const express         = require('express');
const history         = require('connect-history-api-fallback');
const app             = express();

routes(app);

app.use(history());
app.use(express.static('public'));

app.listen(process.env.PORT || config.port, 
    () => console.log(`Server start on port ${config.port} ...`));