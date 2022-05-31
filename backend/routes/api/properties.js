const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../../db/models');
const { Property } = db;

const propertyValidations = require('../../Validations/Properties')

router.get('/', asyncHandler(async (req, res, next) => {
    const properties = await Property.findAll()
    return res.json(properties)
}))

router.post('/', propertyValidations.validateCreate, asyncHandler(async (req, res, next) => {
    const {
        lat,
        long,
        address
    } = req.body
    const property = await Property.build({
        lat,
        long,
        address
    })
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await task.save();
        return res.redirect('/');
    }
}))

router.put('/', asyncHandler(async (req, res, next) => {
    const properties = await Property.findAll()
    return res.json(properties)
}))

router.delete('/', asyncHandler(async (req, res, next) => {
    const properties = await Property.findAll()
    return res.json(properties)
}))

module.exports = router;
