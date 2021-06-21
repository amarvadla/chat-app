const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    res.send("hello world2!!")
})

router.post('/createUser', (req, res) => {

    var payload = req.body;

    var user = userModel(payload);

    user.save((err, savedData) => {
        if (err)
            res.status(500).json({ error: err })
        else
            res.status(201).json(savedData)
    })

})


module.exports = router