// Env
import 'dotenv/config.js';

// Mongoose
import mongoose from 'mongoose';

// Express
import express from 'express';
import cors from 'cors';
import routerSigns from './routers/signs.js';
import routerAPICities from './routers/api/cities.js';
import routerAPIItineraries from './routers/api/itineraries.js';

// App Startup
console.clear();
console.log(`${new Date().toISOString()} | App (startup)`);

// App
const app = express();

app.use(cors());
app.use(express.static('./public'));
app.use(express.json());
app.use('/sign', routerSigns);
app.use('/api/cities', routerAPICities);
app.use('/api/itineraries', routerAPIItineraries);

// DB
// DB (connect)
mongoose
  .connect(process.env.APP_DB_URI)
  .then(() => {
    // Console
    console.log(`${new Date().toISOString()} | DB (active)`);

    // HTTP (listen)
    app.listen(process.env.APP_HTTP_PORT, process.env.APP_HTTP_HOST, () => {
      console.log(`${new Date().toISOString()} | HTTP ${process.env.APP_HTTP_HOST}:${process.env.APP_HTTP_PORT} (listen)`);
    });
  })
  .catch((error) => {
    // Console
    console.log(`${new Date().toISOString()} | DB (ERROR ➜ ${error.message})`);
  });
