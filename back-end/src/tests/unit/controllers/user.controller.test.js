const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const userService = require('../../../api/services/user.service');
const app = require('../../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

const sellerMock = {
  id: 1,
  name: 'Delivery App Admin',
  role: 'seller'
}

describe('Testing userController', () => {
  before(() => {
    sinon.stub(userService, 'getSellers').resolves([sellerMock]);
  });

  after(() => {
    sinon.restore();
  });

  it('Should return response with status 200 and body awway with objects', async () => {
    const response = await chai.request(app)
      .get('/users/sellers')

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.be.an('object');
  });

});