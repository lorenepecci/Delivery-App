const chai = require('chai');
const sinon = require('sinon');

const { User } = require('../../../database/models');
const userService = require('../../../api/services/user.service');
const { expect } = require('chai');

chai.use(require('chai-as-promised'));

const sellerMock = {
  id: 1,
  name: 'Delivery App Admin',
  role: 'seller'
}

describe('Testing userService functions', () => {
  before(async () => {
    sinon.stub(User, 'findAll').resolves([sellerMock]);
  });

  after(() => {
    sinon.restore();
  })

  context('Function getSellers', () => {
    it('Should return an array of objects with fields id, name, role.', async () => {
      const result = await userService.getSellers(sellerMock);

      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');
      expect(result[0]).to.include.all.keys('id', 'name', 'role',);
    })
  })
})