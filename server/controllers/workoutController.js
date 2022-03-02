const db = require('../models/workoutModels');

const workoutController = {};

workoutController.generateWorkout = async (req, res, next) => {
  const sqlQuery = 'SELECT * FROM exercises TABLESAMPLE BERNOULLI(0.7);';
  try {
    const answer = await db.query(sqlQuery);
    const schedule = answer.rows;
    for (let i = schedule.length - 1; i >= 0; i -= 1) {
      schedule[i].sets = Math.ceil(Math.random() * 5);
      schedule[i].weight = 30;
      schedule[i].reps = 12;
      schedule[i].record = [];
    }
    res.locals.workout = schedule;
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = workoutController;
