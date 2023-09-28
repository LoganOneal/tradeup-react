const Airtable = require("airtable");

// Authenticate
const config = require('../config');

Airtable.configure({
    apiKey: config.airtable.apiKey,
});

// Initialize a base
const base = Airtable.base(config.airtable.baseId);

// Reference a table
console.log(config.airtable.talentIntakeTable)
const talentIntakeTable = base(config.airtable.talentIntakeTable);


module.exports = { talentIntakeTable };
