const chai = require('chai');
const sinon = require('sinon');

const { Sale, SalesProduct } = require('../../../database/models');
const salesService = require('../../../api/services/sales.service');
const { expect } = require('chai');

chai.use(require('chai-as-promised'));

const salesMock = [
  {
    id: 1,
    userId: 1,
    sellerId: 1,
    totalPrice: 100,
    deliveryAddress: "Wall Street",
    deliveryNumber: "1",
    saleDate: "2022-08-27T13:03:25.000Z",
    status: 'Pendente'
  },
]

const salesProductMock = [
  {
    saleId: 1,
    productId: 1,
    quantity: 20
  },
]

describe('Testing salesService functions', () => {
  before(async () => {
    sinon.stub(Sale, 'create')
      .resolves({ dataValues: salesMock[0] });

    sinon.stub(SalesProduct, 'bulkCreate')
      .resolves([ { dataValues: salesProductMock[0] } ]);
      
    sinon.stub(Sale, 'findAll')
      .onCall(0).resolves(salesMock)
      .onCall(1).resolves(salesMock)
  });

  after(() => {
    sinon.restore();
  });

  context('Function create', () => {
    it('Should return a number', async () => {
      const result = await salesService
        .create({ ...salesMock, products: [salesProductMock] }, 1);

      expect(result).to.be.a('number');
    });
  });

  context('Function getBySeller', () => {
    it('Should return an array of objects', async () => {
      const result = await salesService
        .getBySeller(1);
      
      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');
    });
  });
  
  context('Function getByUser', () => {
    it('Should return an array of objects', async () => {
      const result = await salesService
        .getByUser(1);
      
      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');
    });
  });
});
