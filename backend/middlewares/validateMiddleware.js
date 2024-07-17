const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const message = err.errors ? err.errors[0].message : 'Validation failed';
      console.log(message);
      res.status(400).json({ msg: message });
    }
  };
  
  module.exports = validate;
  