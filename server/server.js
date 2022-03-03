const path = require('path');
const express = require('express');

const app = express();

const apirouter = require('./routes/apirouter');

const PORT = 3000;

// app.use('/', express.static(path.resolve(__dirname, '../build')));
// app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apirouter);
app.use('/api', apirouter);

app.use('/', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
