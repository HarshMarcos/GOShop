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
  getProductDetail,
  addReview,
  searchProduct,
  searchProductbyCategory,
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

router.put("/ProductUpdate/:id", updateProduct);
router.put("/addReview/:id", addReview);

router.get("/getProducts", getProducts);
router.get("/getSellerProducts/:id", getSellerProducts);
router.get("/getProductDetail/:id", getProductDetail);

router.get("/searchProduct/:key", searchProduct);
router.get("/searchProductbyCategory/:key", searchProductbyCategory);

module.exports = router;
