const db = require('../models/workoutModels');

const workoutController = {};

workoutController.generateWorkout = async (req, res, next) => {
  const sqlQuery = 'SELECT * FROM exercises TABLESAMPLE BERNOULLI(0.7);';
  try {
    res.locals.workout = await db.query(sqlQuery);
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = workoutController;
