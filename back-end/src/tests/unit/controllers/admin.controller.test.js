const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const registerService = require('../../../api/services/register.service');
const app = require('../../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing adminController', () => {

  before(() => {
    sinon.stub(registerService, 'createUser').resolves([]);
  });

  after(() => {
    sinon.restore();
  });

  it('Should return "Token not found" and status 401', async () => {
    const response = await chai.request(app)
      .post('/admin/manage')
      .send({
        name: "Delivery App Admin",
        email: "testingAdmin@deliveryapp.com",
        password: "#--test@321--#",
        role: "administrator"
      })

    expect(response).to.have.status(401);
    expect(response.body.message).to.equal("Token not found");
  });

  it('Should return "Permission denied" and status 401', async () => {
    let token;
    const result = await chai.request(app)
      .post('/login')
      .send({
        email: "fulana@deliveryapp.com",
        password: "fulana@123",
      });

    token = result.body.token;

    const response = await chai.request(app)
      .post('/admin/manage')
      .send({
        name: "Delivery App Admin",
        email: "testingAdmin@deliveryapp.com",
        password: "#--test@321--#",
        role: "administrator"
      }).set({
        Authorization: token
      });

    expect(response).to.have.status(401);
    expect(response.body.message).to.equal("Permission denied");
  });

  it('Should return success true and status 201', async () => {
    let token;
    const result = await chai.request(app)
      .post('/login')
      .send({
        email: "adm@deliveryapp.com",
        password: "--adm2@21!!--",
      });

    token = result.body.token;

    const response = await chai.request(app)
      .post('/admin/manage')
      .send({
        name: "Delivery App Admin",
        email: "testingAdmin@deliveryapp.com",
        password: "#--test@321--#",
        role: "administrator"
      }).set({
        Authorization: token
      });

    expect(response).to.have.status(201);
    expect(response.body).to.deep.equal({ success: true });
  });

});
