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
        postal
    } = req.body
    const property = await Property.build({
        street,
        city,
        state,
        postal
    })

    await property.save();
    return res.redirect('/');
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
