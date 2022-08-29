const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const salesService = require('../../../api/services/sales.service');
const app = require('../../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

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

describe('Testing salesController', () => {
  before(async () => {
    sinon.stub(salesService, 'create').resolves(null);
    sinon.stub(salesService, 'getByUser').resolves(salesMock);
    sinon.stub(salesService, 'getBySeller').resolves(salesMock);
  });

  after(() => {
    sinon.restore();
  });

  context('post "/customer/checkout" controller', () => {
    it('', async () => {
  
    });
  })

  context('get "/customer/orders" controller', () => {
    it('', async () => {
  
    });
  })

  context('get "/seller/orders" controller', () => {
    it('', async () => {
  
    });
  })

});