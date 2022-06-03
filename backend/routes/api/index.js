const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertyRouter = require('./properties.js')
const noteRouter = require('./notes.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/properties', propertyRouter)
router.use('/notes', noteRouter)

module.exports = router;
