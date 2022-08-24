const productsService = require("../service/products.service");

const productsController = {
   async findAll (req,res){
    const products = await productsService.findAll();

    return res.status(200).json({ products });
  }
}

module.exports = productsController;
