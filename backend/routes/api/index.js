const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertyRouter = require('./properties.js')
const noteRouter = require('./notes.js')
const mapsRouter = require('./maps');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/properties', propertyRouter)
router.use('/notes', noteRouter)
router.use('/maps', mapsRouter);

module.exports = router;
