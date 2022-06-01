const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../../db/models');
const { Property } = db;

router.get('/', asyncHandler(async (req, res, next) => {
    const properties = await Property.findAll()
    return res.json(properties)
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const {
        street,
        city,
        state,
        postal,
        userId
    } = req.body
    const property = await Property.build({
        street,
        city,
        state,
        postal,
        userId
    })

    const newProp = await property.save();
    return res.json(newProp)
}))

// router.put('/', asyncHandler(async (req, res, next) => {
//     const properties = await Property.findAll()
//     return res.json(properties)
// }))

// router.delete('/', asyncHandler(async (req, res, next) => {
//     const properties = await Property.findAll()
//     return res.json(properties)
// }))

module.exports = router;
