// Server Dependencies
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./config/winston');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');

// Models Imports
const models = require('./api/models/index');

// Init Express
const app = express();
require('dotenv').config();
const server = http.createServer(app);

// DB Connection
mongoose
  .connect(
    process.env.IS_DEV ? process.env.DB_HOST : process.env.DB_HOST_PROD,
    () => {
      console.log(
        `Connected to ${process.env.IS_DEV ? 'Development' : 'Prod'} Database`
      );
    },
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .catch((err) => {
    console.log(err);
    winston.error(err);
  });

// Server Config
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan('combined', { stream: winston.stream }));
app.use(helmet());
app.set('port', process.env.PORT);

// Cors Config
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

// SwaggerUI Setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

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
server.listen(process.env.PORT, () =>
  console.log(
    `API running on localhost:${process.env.PORT} \nAPI docs - http://localhost:${process.env.PORT}/api-docs`
  )
);
