const Product = require("../models/product.js");
const Customer = require("../models/customer.js");
const product = require("../models/product.js");

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

const getProductDetail = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id)
      .populate("seller", "shopName")
      .populate({
        path: "reviews.reviwer",
        model: "customer",
        select: "name",
      });
    if (product) {
      res.send(product);
    } else {
      res.send({ message: "No Product Found" });
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

const addReview = async (req, res) => {
  try {
    const { rating, comment, reviewer } = req.body;
    const productId = req.params.id;

    const product = await Product.findById(productId);

    const existingReview = product.reviews.find(
      (review) => review.reviewer.toString() === reviewer
    );

    if (existingReview) {
      return res.send({
        message: "You have already submitted a review for this product.",
      });
    }

    product.reviews.push({
      rating,
      comment,
      reviewer,
      date: new Date(),
    });

    const updatedProduct = await product.save();

    res.send(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const searchProduct = async (req, res) => {
  try {
    const key = req.params.key;

    let products = await Product.find({
      $or: [
        { productName: { $regex: key, $options: "i" } },
        { category: { $regex: key, $options: "i" } },
        { subcategory: { $regex: key, $options: "i" } },
      ],
    }).populate("seller", "shopName");

    if (products.length > 0) {
      res.send(products);
    } else {
      res.send({ message: "No Products found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const searchProductbyCategory = async (req, res) => {
  try {
    const key = req.params.key;

    let products = await Product.find({
      $or: [{ category: { $regex: key, $options: "i" } }],
    }).populate("seller", "shopName");

    if (products.length > 0) {
      res.send(products);
    } else {
      res.send({ message: "No products found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createProduct,
  addReview,
  searchProduct,
  searchProductbyCategory,
  getProducts,
  getSellerProducts,
  getProductDetail,
  updateProduct,
};
