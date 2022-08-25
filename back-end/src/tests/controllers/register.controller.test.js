const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const registerService = require('../../api/services/register.service');
const app = require('../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing registerController', () => {

  before(() => {
    sinon.stub(registerService, 'createUser').returns(['aloha3']);
  });

  after(() => {
    sinon.restore();
  });

  it('Should return statusCode 201', async () => {
    const response = await chai.request(app)
      .post('/register')
      .send({
        name: "Delivery App Admin",
        email: "testing@deliveryapp.com",
        password: "#--test@321--#"
      });

    expect(response).to.have.status(201);
  });

});
