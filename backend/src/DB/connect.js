const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb://db:27017/metawlug',
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => {
        console.log('Database Connected');
    }).catch((e) => {
        console.log('No Connection');
    }
);