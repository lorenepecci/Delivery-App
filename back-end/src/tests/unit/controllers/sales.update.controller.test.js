const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../api/services/sales.service');
const salesController = require('../../../api/controllers/sales.controller');

describe('Product Controller', () => {
  const response = {};
  const request = {};

  before(() => {
    sinon.stub(salesService, 'updateStatus').returns([]);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns({});
  });

  after(() => {
    sinon.restore();
  });

  it('should return all products', async () => {
    await salesController.updateStatus(request, response);

    expect(response.status.calledWith(200)).to.be.true;
  });
});
