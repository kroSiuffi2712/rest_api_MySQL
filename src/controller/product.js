import db from "../models";

import products from "../database/config/products";
import categories from "../database/config/categories";
import customers from "../database/config/customer";
import ProductService from "../services/productService";

const productServiceInstance = new ProductService(db);

module.exports = {
  index: async (req, res) => {
    await productServiceInstance
      .GetProducts()
      .then((products) => {
        if (products.length > 0) res.status(200).json(products);
        else res.status(200).json([]);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getProduct: async (req, res) => {
    const { id } = req.params;
    await productServiceInstance
      .GetProductById(id)
      .then((product) => {
        res.status(200).json(product === null ? {} : product);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  newProduct: async (req, res) => {
    const orderDTO = req.body;
    await productServiceInstance
      .CreateProduct(orderDTO)
      .then((result) => {
        res.status(200).json({ orderNumber: result.orderNumber });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  },

  bulkProductsInsert: async (req, res) => {
    customers.map(async (customer) => {
      await db.customer
        .create({
          id: 0,
          fullName: customer.fullName,
          identifier: customer.identifier,
          address: customer.address,
          phoneNumber: customer.phoneNumber,
          email: customer.email,
        })
        .then((data) => {
          res.status(200).json({ status: "successful insertion - customer" });
        })
        .catch((err) => {
          res
            .status(400)
            .json({ status: "Error to insert new record in customer" });
        });
    });

    categories.map(async (category) => {
      await db.category
        .create({ id: 0, name: category.name })
        .then((data) => {
          res.status(200).json({ status: "successful insertion - category" });
        })
        .catch((err) => {
          res
            .status(400)
            .json({ status: "Error to insert new record in category" });
        });
    });

    products.map(async (product) => {
      await db.product
        .create({
          id: 0,
          categoryId: product.categoryId,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
        })
        .then((data) => {
          res.status(200).json({ status: "successful insertion - products" });
        })
        .catch((err) => {
          res
            .status(400)
            .json({ status: "Error to insert new record in product" });
        });
    });
  },
};
