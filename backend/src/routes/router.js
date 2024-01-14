const express = require('express');
const router = express.Router();
const datacontroller = require('../controller/datacontroller');

router.get(
    '/',
    (req, res) => res.send('Your Server is Up and Running!')
)

router.post(
    '/insert',
    datacontroller.insertdata
);

router.get(
    '/get',
    datacontroller.getdata
);

router.post(
    '/delete',
    datacontroller.deletedata
);

module.exports = router;