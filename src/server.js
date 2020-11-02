import express from 'express';

const app = express();

require('dotenv-safe').config();

import { connectToMongo } from './mongoose';
import hitApi from './jobs/hitApi.redisJob';
import models from './mongoose';

connectToMongo();

app.get('/', async (req, res) => {
    const results = await models.HitApi.find();

    res.send(results);
});

app.use(hitApi);

app.get('/hit-api1', (req, res) => {
    res.send('you-hit-api1');
});

app.get('/hit-api2', (req, res) => {
    res.send('you-hit-api2');
});

app.listen(3000, () => {
    console.log('Server start listening port 3000');
});
