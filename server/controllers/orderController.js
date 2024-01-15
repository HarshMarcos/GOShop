const Order = require("../models/order.js");

const newOrder = async (req, res) => {
  try {
    const {
      buyer,
      shippingData,
      orderedProducts,
      paymentInfo,
      productsQuantity,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      buyer,
      shippingData,
      orderedProducts,
      paymentInfo,
      paidAt: Date.now(),
      productsQuantity,
      totalPrice,
    });

    return res.send(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOrderedProductsByCustomer = async (req, res) => {
  try {
    let orders = await Order.find({ buyer: req.params.id });

    if (orders.length > 0) {
      const orderedProducts = orders.reduce((accumulator, order) => {
        accumulator.push(...order.orderedProducts);
        return accumulator;
      }, []);
      res.send(orderedProducts);
    } else {
      res.send({ message: "No products found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  newOrder,
  getOrderedProductsByCustomer,
};
