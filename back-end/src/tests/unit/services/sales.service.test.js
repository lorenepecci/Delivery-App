const chai = require('chai');
const sinon = require('sinon');

const { Sale } = require('../../../database/models');
const salesService = require('../../../api/services/sales.service');
const { expect } = require('chai');
const HttpException = require('../../../api/utils/HttpException');

chai.use(require('chai-as-promised'));

const salesMock = [
  {
    id: 1,
    userId: 1,
    sellerId: 2,
    totalPrice: 100,
    deliveryAddress: "Wall Street",
    deliveryNumber: "1",
    saleDate: "2022-08-27T13:03:25.000Z",
    status: 'Pendente'
  },
  {
    id: 2,
    userId: 1,
    sellerId: 2,
    totalPrice: 150,
    deliveryAddress: "Broadway",
    deliveryNumber: "2",
    saleDate: "2022-08-27T13:24:01.000Z",
    status: 'Pendente'
  }
]

const salesProductMock = [
  {
    saleId: 1,
    productId: 1,
    quantity: 20
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 30
  }
]


describe('Testing salesService functions', () => {
  before(async () => {
    sinon.stub(Sale, 'create')
      .resolves({ dataValues: salesMock[0] });

    sinon.stub(Sale, 'bulkCreate')
      .resolves([ { dataValues: salesProductMock[0] } ]);
      
    sinon.stub(Sale, 'findAll')
      .onCall(0).resolves(salesMock)
      .onCall(1).resolves(salesMock)
  });

  after(() => {
    sinon.restore();
  });

  context('Function create', () => {
    it('', async () => {

    });
  });

  context('Function getBySeller', () => {
    it('', async () => {

    });
  });
  
  context('Function getByUser', () => {
    it('', async () => {

    });
  });
});
