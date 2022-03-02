const path = require('path');
const express = require('express');

const app = express();

const workoutController = require('./controllers/workoutController');

const PORT = 3000;

// app.use('/', express.static(path.resolve(__dirname, '../build')));
// app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

app.get('/api/workout', workoutController.generateWorkout, (req, res) => {
  console.log('api path');
  return res.status(200).json(res.locals.workout);
});

app.get('/workout', workoutController.generateWorkout, (req, res) => {
  console.log('root path');
  return res.status(200).json(res.locals.workout);
});

app.use('/', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
