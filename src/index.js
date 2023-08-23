// Env
import 'dotenv/config.js';

// Mongoose
import mongoose from 'mongoose';

// Express
import express from 'express';
import cors from 'cors';
import routerCities from './routers/cities.js';

// App Startup
console.log(`${new Date().toISOString()} | App (startup)`);

// Express
const app = express();

app.use(cors());
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/cities', routerCities);

// DB
// DB (connect)
mongoose
  .connect(process.env.APP_DB_URL)
  .then(() => {
    // Console
    //console.log(`${new Date().toISOString()} | DB ${process.env.APP_DB_HOST}:${process.env.APP_DB_PORT} (active)`);
    console.log(`${new Date().toISOString()} | DB (active)`);

    // HTTP (listen)
    app.listen(process.env.APP_HTTP_PORT, process.env.APP_HTTP_HOST, () => {
      console.log(`${new Date().toISOString()} | HTTP ${process.env.APP_HTTP_HOST}:${process.env.APP_HTTP_PORT} (listen)`);
    });
  })
  .catch((error) => {
    // Console
    //console.log(`${new Date().toISOString()} | DB ${process.env.APP_DB_HOST}:${process.env.APP_DB_PORT} (ERROR ➜ ${error.message})`);
    console.log(`${new Date().toISOString()} | DB (ERROR ➜ ${error.message})`);
  });
