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
    });
    return res.json(notes);
}));

router.post('/' ,requireAuth, asyncHandler(async (req, res, next) => {
    const {
        description,
        body,
        propertyId
    } = req.body;

    const note = await Note.build({
        description,
        body,
        propertyId
    });

    const newNote = await note.save();
    return res.json(newNote);
}));

router.put('/:propertyId', requireAuth, asyncHandler(async (req, res, next) => {
    const {
        id,
        description,
        body,
        propertyId
    } = req.body.payload;

    const note = await Note.findByPk(id);

    const editNote = await note.update({
        id,
        description,
        body,
        propertyId
    });

    return res.json(editNote);
}));

router.delete('/:propertyId', requireAuth, asyncHandler(async (req, res, next) => {
    const deleteNote = await Note.findByPk(req.body.noteId);

    if (deleteNote) {
        await deleteNote.destroy();
        return res.json({id: req.body.noteId, message: 'Successfully deleted note'});
    } else {
        return res.json({id: req.body.noteId, message: 'Failed to delete note'});
    }
}));

module.exports = router;
