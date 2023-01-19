const validateBody = (schema) => {
  const func = (res, req, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(() => {
        error.status = 400;
        throw error;
      });
    }
    next();
  };
  return func;
};

module.exports = validateBody;
