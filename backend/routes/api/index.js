const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const propertyRouter = require('./properties.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/properties', propertyRouter)

module.exports = router;
