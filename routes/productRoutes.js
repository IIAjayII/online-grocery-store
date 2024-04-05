import Express from "express";
import { isAdmin, requiresignin } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  filtersProductController,
  productCountController,
  productListController,
  productPhotoController,
  getProductController,
  getSingleProductController,
  updateProductController,
  productSearchController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
  quantityController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = Express.Router();

//Product Routes

router.post(
  "/create-product",
  requiresignin,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:fid",
  requiresignin,
  isAdmin,
  formidable(),
  updateProductController
);

//Get Product
router.get("/get-product", getProductController);

//Single Product
router.get("/single-product/:slug", getSingleProductController);

//Product Photo
router.get("/product-photo/:fid", productPhotoController);

//Delete Product
router.delete("/delete-product/:fid", deleteProductController);

//Filter Products
router.post("/filters-product", filtersProductController);

//Products list count
router.get("/product-count", productCountController);

//products  per page
router.get("/product-list/:page", productListController);

//Seacrch Product
router.get("/search/:keywords", productSearchController);

//Similar Products
router.get("/related-product/:fid/:cid", relatedProductController);

//category wise products
router.get("/product-category/:slug", productCategoryController);

//payments routes

//token
router.get("/braintree/token", braintreeTokenController);

//New Order payment
router.post(
  "/braintree/payment",
  requiresignin,
  braintreePaymentController,
  quantityController
);
// router.put("/quantity", requiresignin, quantityController);

export default router;
