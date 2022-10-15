const AirtablePlus = require('airtable-plus')

const API_KEY = process.env.AIRTABLE;

export const registrationsAirtable = new AirtablePlus({
  baseID: 'appCTib4xAvedL1kc',
  apiKey: API_KEY,
  tableName: 'Registrations-Main'
})
