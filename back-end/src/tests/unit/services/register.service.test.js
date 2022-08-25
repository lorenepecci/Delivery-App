const chai = require('chai');
const sinon = require('sinon');

const { User } = require('../../../database/models');
const registerService = require('../../../api/services/register.service');
const { expect } = require('chai');
const jwt = require('jsonwebtoken');

chai.use(require('chai-as-promised'));

const registerMock = {
  name: "Delivery App Admin",
  email: "testing@deliveryapp.com",
  role: "customer",
}
const token = "eyJhbGciOiJIUzI1NiJ9...";

describe('Testing registerService functions', () => {
  const throwUser = { parent: { } };
  const throwUserAlreadyExists = { parent: { errno: 1062 } };
  before(async () => {
    sinon.stub(User, 'create')
      .onCall(0).throws(throwUser)
      .onCall(1).throws(throwUserAlreadyExists)
      .onCall(2).resolves([]);

      sinon.stub(jwt, 'sign').onFirstCall().returns(token);
  });

  after(() => {
    sinon.restore();
  })

  context('Function register', () => {
    it('Should throw an exception if passed empty body', async () => {
      let response;
      try {
        response = await registerService.createUser({});
      } catch (error) {
        response = error;
      }
      expect(response.message).to.be.equal("Internal Server Error");
      expect(response.status).to.equal(500);
    });

    it('Should throw an exception if passed with user already registered.', async () => {
      let response;
      try {
        response = await registerService.createUser({});
      } catch (error) {
        response = error;
      }

      expect(response.message).to.be.equal("User already registered");
      expect(response.status).to.equal(409);
    });

    it('Should return an object with fields name, email, role and token.', async () => {
      const response = await registerService.createUser(registerMock);
      const expected = {...registerMock, token};

      expect(response).to.be.an('object');
      expect(response).to.include.all.keys('name', 'email', 'role', 'token');
      expect(response).to.deep.equal(expected);
    });

  });
});
