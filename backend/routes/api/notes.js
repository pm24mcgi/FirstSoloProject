const express = require('express');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth')
const router = express.Router();
const db = require('../../db/models');
const { Note } = db;

router.get('/:propertyId', requireAuth, asyncHandler(async (req, res, next) => {
    const notes = await Note.findAll({
        where: {
            propertyId: req.params.propertyId
        }
    })
    return res.json(notes)
}))

router.post('/:propertyId', requireAuth, asyncHandler(async (req, res, next) => {
    const {
        description,
        body,
        propertyId
    } = req.body
    const note = await Note.build({
        description,
        body,
        propertyId
    })

    const newNote = await note.save();
    return res.json(newNote)
}))

// router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
//     const {
//         street,
//         city,
//         state,
//         postal,
//         userId
//     } = req.body.payload

//     const property = await Property.findByPk(req.body.propertyId)

//     const editProperty = await property.update({
//         street,
//         city,
//         state,
//         postal,
//         userId
//     })

//     res.json(editProperty)
// }))

// router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
//     const deleteProperty = await Property.findByPk(req.body.propertyId)
//     if (deleteProperty) {
//         await deleteProperty.destroy()
//         return res.json({id: req.body.propertyId, message: 'Successfully deleted'})
//     } else {
//         return res.json({id: req.body.propertyId, message: 'Failed to delete'})
//     }
// }))

module.exports = router;
