const router = require("express").Router();

const {
  customerRegister,
  customerLogIn,
  getCartDetail,
  cartUpdate,
} = require("../controllers/customerController.js");
const {
  newOrder,
  getOrderedProductsByCustomer,
} = require("../controllers/orderController.js");
const {
  createProduct,
  getProducts,
  getSellerProducts,
  updateProduct,
  getProductDetail,
  addReview,
  searchProduct,
  searchProductbyCategory,
  deleteProduct,
  deleteProducts,
  getAddedToCartProducts,
} = require("../controllers/productController.js");
const {
  sellerRegister,
  sellerLogIn,
} = require("../controllers/sellerController.js");

//customer
router.post("/CustomerRegister", customerRegister);
router.post("/CustomerLogin", customerLogIn);
router.get("/cart-details/:id", getCartDetail);
router.get("/CustomerUpdate/:id", cartUpdate);

//seller
router.post("/SellerRegister", sellerRegister);
router.post("/SellerLogIn", sellerLogIn);

//orders
router.post("/new-order", newOrder);
router.get("/order-customer/:id", getOrderedProductsByCustomer);

//product
router.post("/CreateNewProduct", createProduct);

router.put("/ProductUpdate/:id", updateProduct);
router.put("/addReview/:id", addReview);

router.get("/getProducts", getProducts);
router.get("/getSellerProducts/:id", getSellerProducts);
router.get("/getProductDetail/:id", getProductDetail);
router.get("/cart/:id", getAddedToCartProducts);

router.get("/searchProduct/:key", searchProduct);
router.get("/searchProductbyCategory/:key", searchProductbyCategory);

router.delete("/delteProduct/:id", deleteProduct);
router.delete("/delteProducts/:id", deleteProducts);

module.exports = router;
