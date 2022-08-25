const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const loginService = require('../../../api/services/login.service');
const app = require('../../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

const loginServiceMock = {
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: 'token123'
}

const loginBodyMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
}

describe('Testing registerController', () => {

  before(() => {
    sinon.stub(loginService, 'login')
      .returns(loginServiceMock);
  });

  after(() => {
    sinon.restore();
  });

  it('Should return response with status 200 and body object with keys name, email, role, and token', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send(loginBodyMock);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.include.all.keys('name', 'email', 'role', 'token');
  });

});