const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../api/services/products.service');

const res = {};

describe('Product Controller', () => {
  before(() => {
    sinon.stub(productsService, 'findAll').resolves([]);

    res.status = sinon.stub(res);
    res.json = sinon.stub(res);

    expect(res.status).to.have.been.call(200);
    expect(res.json).to.be.an('array');
  });

  after(() => {
    sinon.restore();
  });
  it('should return an list of products', () => {});
});
