const sinon = require('sinon');
const { expect } = require('chai');
const { Sale } = require('../../../database/models');
const salesService = require('../../../api/services/sales.service');

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

describe.only('Sale Update Service', () => {
  before(() => {
    sinon.stub(Sale, 'findOne').resolves(salesMock[0]);
  });

  after(() => {
    sinon.restore();
  });

  it('should update order status to Entregue', async () => {
    const id = salesMock[0].id;

    const sales = await salesService.updateStatus(id);

    expect(sales).to.be.equal(salesMock[0])
    expect(sales.status).to.be("Entregue")
  });
});
