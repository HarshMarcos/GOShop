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
  searchProductbySubCategory,
  deleteProductReview,
  deleteAllProductReviews,
} = require("../controllers/productController.js");
const {
  sellerRegister,
  sellerLogIn,
} = require("../controllers/sellerController.js");

//customer
router.post("/CustomerRegister", customerRegister);
router.post("/CustomerLogin", customerLogIn);
router.get("/cart-details/:id", getCartDetail);
router.put("/CustomerUpdate/:id", cartUpdate);

//seller
router.post("/SellerRegister", sellerRegister);
router.post("/SellerLogIn", sellerLogIn);

//orders
router.post("/newOrder", newOrder);
router.get("/getOrderedProductsByCustomer/:id", getOrderedProductsByCustomer);

//product
router.post("/CreateNewProduct", createProduct);

router.put("/ProductUpdate/:id", updateProduct);
router.put("/addReview/:id", addReview);

router.get("/getProducts", getProducts);
router.get("/getSellerProducts/:id", getSellerProducts);
router.get("/getProductDetail/:id", getProductDetail);
router.get("/cart/:id", getAddedToCartProducts);

router.get("/searchProducts/:key", searchProduct);
router.get("/searchProductbyCategory/:key", searchProductbyCategory);
router.get("/searchProductbySubCategory/:key", searchProductbySubCategory);

router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/deleteProducts/:id", deleteProducts);
router.put("/deleteProductReview/:id", deleteProductReview);
router.delete("/deleteAllProductReviews/:id", deleteAllProductReviews);

module.exports = router;
