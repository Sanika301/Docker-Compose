const Data = require('../models/dataschema');

exports.insertdata = async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.status(201).send(data);
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e.message});
    }
}

exports.getdata = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e.message});
    }
}

exports.deletedata = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).json({
            status: 'fail',
            message: e.message});
    }
}