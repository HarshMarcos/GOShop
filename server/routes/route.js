const router = require("express").Router();

const {
  customerRegister,
  customerLogIn,
} = require("../controllers/customerController.js");
const {
  createProduct,
  getProducts,
  getSellerProducts,
  updateProduct,
} = require("../controllers/productController.js");
const {
  sellerRegister,
  sellerLogIn,
} = require("../controllers/sellerController.js");

//customer
router.post("/CustomerRegister", customerRegister);
router.post("/CustomerLogin", customerLogIn);

//seller
router.post("/SellerRegister", sellerRegister);
router.post("/SellerLogIn", sellerLogIn);

//product
router.post("/CreateNewProduct", createProduct);

router.put("ProductUpdate/:id", updateProduct);

router.get("/getProducts", getProducts);
router.get("/getSellerProducts/:id", getSellerProducts);

module.exports = router;
