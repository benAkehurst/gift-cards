// Server Dependencies
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./config/winston');
const helmet = require('helmet');

// Models Imports
const Code = require('./api/models/code.model');
const Stamp = require('./api/models/stamp.model');
const Store = require('./api/models/store.model');
const User = require('./api/models/user.model');

// Init Express
const app = express();
require('dotenv').config();

// DB Connection
mongoose.Promise = global.Promise;
let dev = process.env.DEV;
mongoose.connect(
  dev
    ? `mongodb://${process.env.LOCAL_DB}`
    : `mongodb://${process.env.PROD_DB}`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (e) => {
    if (e) {
      const dbError = {
        error: e,
        msg: 'Error Connecting to Database. Please check MongoDB is running',
      };
      console.log(dbError);
    } else {
      console.log(`Connected to ${dev ? 'Development' : 'Prod'} Database`);
    }
  }
);

// Server Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(helmet());

// Cors Controls
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS'
  );
  next();
});
app.use(cors());

// Routes Definitions
const adminRoutes = require('./api/routes/admin.routes');
const authRoutes = require('./api/routes/auth.routes');
const stampRoutes = require('./api/routes/stamp.routes');
const userRoutes = require('./api/routes/user.routes');
adminRoutes(app);
authRoutes(app);
stampRoutes(app);
userRoutes(app);

// 404 Handling
app.use((req, res) => {
  winston.error(`'Hit 404' - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Server Port Controls
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
