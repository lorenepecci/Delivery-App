const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../api/services/products.service');
const productsController = require('../../api/controllers/products.controller');

describe('Product Controller', () => {
  const response = {};
  const request = {};

  before(() => {
    sinon.stub(productsService, 'findAll').returns([]);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns({});
  });

  after(() => {
    sinon.restore();
  });

  it('should return all products', async () => {
    await productsController.findAll(request, response);

    expect(response.status.calledWith(200)).to.be.true;
  });
});
