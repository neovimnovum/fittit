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

workoutController.logWorkout = async (req, res, next) => {
  const workoutQuery = 'INSERT INTO workouts (start_time, end_time, username) VALUES ($1, $2, $3) RETURNING _id;';
  const { startTime, agenda } = req.body;
  const endTime = (new Date()).toISOString();
  res.locals.ledger = { count: 0 };
  try {
    const workoutId = await db.query(workoutQuery, [startTime, endTime, 'administrator']);
    agenda.forEach((exercise) => {
      const setQuery = 'INSERT INTO sets (exercise_id, workout_id, reps, weight) VALUES ($1, $2, $3, $4);';
      exercise.record.forEach((set) => {
        const queryArr = [];
        queryArr.push(exercise.id);
        queryArr.push(workoutId.rows[0]._id);
        queryArr.push(set.reps);
        queryArr.push(set.weight);
        try {
          db.query(setQuery, queryArr);
          res.locals.ledger.count += 1;
        } catch (e) {
          return next(e);
        }
      });
    });
  } catch (e) {
    console.log(e);
    return next(e);
  }
  return next();
};

workoutController.getWorkoutHistory = async (req, res, next) => {
  const historyQuery = 'SELECT * FROM workouts ORDER BY end_time DESC LIMIT 5;';
  try {
    const history = await db.query(historyQuery);
    res.locals.history = history.rows;
    return next();
  } catch (e) {
    return next(e);
  }
};

workoutController.getWorkoutDetails = async (req, res, next) => {
  const detailsQuery = 'SELECT s._id, s.workout_id, s.reps, s.weight, e.name FROM (SELECT * FROM sets WHERE workout_id = $1) s INNER JOIN exercises e ON s.exercise_id = e.id;';
  try {
    const details = await db.query(detailsQuery, [req.params.id]);
    res.locals.details = details.rows;
    return next();
  } catch (e) {
    return next(e);
  }
};

workoutController.deleteSet = async (req, res, next) => {
  const deleteQuery = 'DELETE FROM sets WHERE sets._id = $1;';
  try {
    const deleted = await db.query(deleteQuery, [req.params.id]);
    return next();
  } catch (e) {
    return next(e);
  }
};

workoutController.updateSet = async (req, res, next) => {
  const updateQuery = 'UPDATE sets SET weight = $1, reps = $2 WHERE sets._id = $3 RETURNING *;';
  console.log(req.body);
  console.log(req.params);
  try {
    const updated = await db.query(updateQuery, [req.body.weight, req.body.reps, req.params.id]);
    res.locals.updated = updated.rows[0];
    return next();
  } catch (e) {
    return next(e);
  }
};

workoutController.deleteWorkout = async (req, res, next) => {
  const deleteQuery = 'DELETE FROM workouts WHERE workouts._id = $1;';
  try {
    const deleted = await db.query(deleteQuery, [req.params.id]);
    res.locals.deleted = deleted;
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = workoutController;
