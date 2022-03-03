const express = require('express');
const router = express.Router();

const workoutController = require('../controllers/workoutController');

router.get('/api/workout', workoutController.generateWorkout, (req, res) => {
  return res.status(200).json(res.locals.workout);
});

router.post('/api/workout', workoutController.logWorkout, (req, res) => {
  return res.status(200).json(res.locals.ledger);
});

router.get('/workouts/:id', workoutController.getWorkoutDetails, (req, res) => {
  console.log('got workout deets');
  return res.status(200).json(res.locals.details);
});

router.delete('/workouts/:id', workoutController.deleteWorkout, (req, res) => {
  console.log('deleted workout');
  return res.status(200).json({ deleted: true });
});

router.get('/workouts', workoutController.getWorkoutHistory, (req, res) => {
  console.log('got most recent workouts');
  return res.status(200).json(res.locals.history);
});

router.delete('/sets/:id', workoutController.deleteSet, (req, res) => {
  console.log('deleted set');
  return res.status(200).json({ index: req.body.index });
});

router.put('/sets/:id', workoutController.updateSet, (req, res) => {
  console.log('updated set');
  res.locals.updated.index = req.body.index;
  return res.status(200).json(res.locals.updated);
});

module.exports = router;
