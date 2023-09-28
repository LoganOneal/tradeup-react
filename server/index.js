const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();
const { talentIntakeTable } = require('./utils/airtable');

// app.use(bodyParser.js({ extended: false }));
var jsonParser = bodyParser.json()

app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/submitTalentIntakeForm', jsonParser, async (req, res) => {
  const { firstName, lastName, phoneNumber, email, company } = req.body.formData;
  console.log("BODY", req.body);
  try {
    await talentIntakeTable.create([{ fields: { firstName, lastName, phoneNumber, email, company } }]);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
});

app.post('/api/submitEmployerIntakeForm', jsonParser, async (req, res) => {
  const { firstName, lastName, phoneNumber, email, company } = req.body.formData;
  console.log("BODY", req.body);
  try {
    await talentIntakeTable.create([{ fields: { firstName, lastName, phoneNumber, email, company } }]);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
