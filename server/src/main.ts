import app from './app';
import * as mongoose from 'mongoose';
import config from './config';

const PORT = config.port;
const MONGO_URI = 'mongodb://localhost:27017/blog';

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
    mongoose.connection.on('open', () => {
        console.info('Connected to Mongo.')
    })
    mongoose.connection.on('error', (err: any) => {
        console.error(err)
    })
});