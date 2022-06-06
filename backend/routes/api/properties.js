const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const {requireAuth} = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');
const { Property } = db;
const { handleValidationErrors } = require('../../utils/validation');

const validateProperty = [
    check('street')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the street.')
        .isLength({ max: 256 })
        .withMessage('Street Name must not be more than 256 characters.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the city.')
        .isLength({ max: 100 })
        .withMessage('City must not be more than 100 characters.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the state.')
        .isLength({ max: 2 })
        .withMessage('State must not be more than 2 characters.')
        .matches(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/)
        .withMessage('Valid 2 letter state abbreviations only.'),
    check('postal')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the postal code.')
        .matches(/^\d{5}$/)
        .withMessage('Postal code must be 5 digits.'),
    handleValidationErrors
];

const validatePropertyEDIT = [
    check('street')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the street.')
        .isLength({ max: 256 })
        .withMessage('Street Name must not be more than 256 characters.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the city.')
        .isLength({ max: 100 })
        .withMessage('City must not be more than 100 characters.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the state.')
        .isLength({ max: 2 })
        .withMessage('State must not be more than 2 characters.')
        .matches(/^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/)
        .withMessage('Valid 2 letter state abbreviations only.'),
    check('postal')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the postal code.')
        .matches(/^\d{5}$/)
        .withMessage('Postal code must be 5 digits.'),
    handleValidationErrors
];

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const properties = await Property.findAll();
    return res.json(properties);
}));

router.post('/', requireAuth, validateProperty, asyncHandler(async (req, res, next) => {
    const {
        street,
        city,
        state,
        postal,
        userId
    } = req.body;
    const property = await Property.build({
        street,
        city,
        state,
        postal,
        userId
    });

    const newProp = await property.save();
    return res.json(newProp);
}));

router.put('/:id(\\d+)', requireAuth, validatePropertyEDIT, asyncHandler(async (req, res, next) => {
    const {
        id,
        street,
        city,
        state,
        postal,
        userId
    } = req.body;

    const property = await Property.findByPk(id);

    const editProperty = await property.update({
        street,
        city,
        state,
        postal,
        userId
    });

    res.json(editProperty);
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const deleteProperty = await Property.findByPk(req.body.propertyId);
    if (deleteProperty) {
        await deleteProperty.destroy();
        return res.json({id: req.body.propertyId, message: 'Successfully deleted property'});
    } else {
        return res.json({id: req.body.propertyId, message: 'Failed to delete property'});
    };
}));

module.exports = router;
