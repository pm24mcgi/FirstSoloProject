const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const lat = check('number')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0 });
const long = check('attack')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0, max: 100 })
  .toInt();
const address = check('defense')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0, max: 100 })
  .toInt();
const moves = check('moves').isArray();

exports.validateCreate = [
  lat,
  long,
  address,
  handleValidationErrors
];

exports.validateUpdate = [
  lat,
  long,
  address,
  handleValidationErrors
];
