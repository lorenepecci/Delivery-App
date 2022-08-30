const chai = require('chai');
const sinon = require('sinon');

const { User } = require('../../../database/models');
const loginService = require('../../../api/services/login.service');
const { expect } = require('chai');
const HttpException = require('../../../api/utils/HttpException');

chai.use(require('chai-as-promised'));

const userMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator'
  // senha: md5('--adm2@21!!--')
}

const loginMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
}

describe('Testing loginService functions', () => {
  before(async () => {
    sinon.stub(User, 'findOne')
      .onCall(0).resolves(null)
      .onCall(1).resolves(userMock)
      .onCall(2).resolves(userMock);
  });

  after(() => {
    sinon.restore();
  })

  context('Function login', () => {
    it('Should throw an exception if passed wrong email', async () => {
      await expect(loginService.login({ ...loginMock, email: 'wrong-email' }))
        .to.be.rejectedWith(HttpException, 'Not found');
    });

    it('Should throw an exception if passed right email and wrong password', async () => {
      await expect(loginService.login({ ...loginMock, password: 'wrong-password' }))
        .to.be.rejectedWith(HttpException, 'Wrong credentials');
    });

    it('Should return an object with fields name, email, role and token if passed right email and right password', async () => {
      const result = await loginService.login(loginMock);

      expect(result).to.be.an('object');
      expect(result).to.include.all.keys('name', 'email', 'role', 'token');
    })
  })
})