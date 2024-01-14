const Product = require("../models/product.js");
const Customer = require("../models/customer.js");

const createProduct = async (req, res) => {
  try {
    const createProduct = new Product(req.body);

    let finalProduct = await createProduct.save();
    res.send(finalProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProducts = async (req, res) => {
  try {
    let products = await Product.find().populate("seller", "shopName");
    if (products.length > 0) {
      res.send(products);
    } else {
      res.send({ message: "No products found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSellerProducts = async (req, res) => {
  try {
    let products = await Product.find({ seller: req.params.id });
    if (products.length > 0) {
      res.send(products);
    } else {
      res.send({ message: "No Products Found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    let result = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getSellerProducts,
  updateProduct,
};
