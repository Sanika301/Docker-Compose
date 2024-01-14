const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const router = require('./routes/router');
require('./DB/connect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);



app.get('/', (req, res) => res.send('Your Server is Up and Running!'));


app.listen(port, () => console.log(`App listening on port ${port}!`));