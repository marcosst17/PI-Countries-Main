/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Testing',
  flag: 'justaflag.png',
  continent: 'South America',
  capital: 'Buenos Aires',
  id: "TST"
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries/:id/details', () => {
    it('should get 200', () =>
      agent.get(`/countries/ARG/details`).expect(200)
    );
    it('should get 200 on the created country', () => {
      agent.get(`/countries/TST/details`).expect(200)
    });
  })

});
