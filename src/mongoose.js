import mongoose from 'mongoose';
import HitApi from './models/hitApi.model';

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

if (process.env.ENV === 'development') {
    mongoose.set('debug', true);
}

export const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useFindAndModify: false,
        keepAlive: 1,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    return mongoose.connection;
}

export const getMongoConnection = () => mongoose.connection;

const models = { HitApi };

export default models;
