const { validationResult } = require("express-validator");

exports.handleValidationErrors = function (req, _res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = {};
    errors.array({ onlyFirstError: true })
          .forEach((event) => errorMessages[event.param] = event.msg);
    return next({ title: "Validation Error",
                  status: 422,
                  errors: errorMessages
    });
  }
  return next();
}
