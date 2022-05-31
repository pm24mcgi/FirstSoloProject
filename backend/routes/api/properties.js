const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../../db/models');
const { Property } = db;


router.get('/', asyncHandler(async (req, res, next) => {
    console.log('PROPERTY DB HIT')
    const properties = await Property.findAll()
    return res.json(properties)
}))

module.exports = router;
