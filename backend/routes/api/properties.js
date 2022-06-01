const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth')
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

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const deleteProperty = await Property.findByPk(req.body.propertyId)
    if (deleteProperty) {
        await deleteProperty.destroy()
        return res.json({id: req.body.propertyId, message: 'Successfully deleted'})
    } else {
        return res.json({id: req.body.propertyId, message: 'Failed to delete'})
    }
}))

module.exports = router;
