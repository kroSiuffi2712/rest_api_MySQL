import express from "express";

const router = express.Router();
const {
  index,
  newProduct,
  getProduct,
  bulkProductsInsert,
} = require("../controller/product");

router.get("/", index);
router.get("/:id", getProduct);
router.post("/", newProduct);
router.post("/bulkProducts", bulkProductsInsert);

module.exports = router;
