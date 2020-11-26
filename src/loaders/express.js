import express from "express";

module.exports = {
  init: async (app) => {
    //settings
    app.set("port", process.env.PORT || 3000);

    // Add headers
    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
    });

    //Middlewares
    app.use(express.json());

    //Routes
    app.use("/api/products", require("../routes/product"));
    app.use("/api/categories", require("../routes/category"));
    app.use("/api/orders", require("../routes/order"));
    app.use("/api/customers", require("../routes/customer"));
    app.use("/api/cart", require("../routes/cart"));

    return app;
  },
};
