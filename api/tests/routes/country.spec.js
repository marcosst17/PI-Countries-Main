/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn, Activity } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Testing',
  flag: 'justaflag.png',
  continent: 'South America',
  capital: 'Buenos Aires',
  id: "TST"
};

const acti = {
  name: "Testeando",
  duration: "3 decadas",
  difficulty: "5",
  season: "winter",
  countryId: "ARG"
}

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
  })
  describe("GET /countries/all", () => {
    it("should get 200", () => 
      agent.get(`/countries/all`).expect(200)
    )
  })
  describe("GET /countries/borders", () => 
    it("should get 200", () => 
      agent.get(`/countries/borders?borders=`).expect(200)
    )
  )
});

describe("Activity routes", () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  beforeEach(() => Activity.sync({force: true})
    .then(() => Activity.create(acti)));
  describe("GET /activities", () => 
    it("should get 200", () => 
      agent.get("/activities").expect(200) 
    )
  )
})