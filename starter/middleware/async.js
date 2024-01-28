const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // If an error occurs, pass it to the next middleware in the chain (or error-handling middleware)
      next(error);
    }
  };
};

module.exports = asyncWrapper;
