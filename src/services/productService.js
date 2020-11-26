module.exports = class ProductService {
  constructor(db) {
    this._db = db;
  }
  async GetProducts() {
    const result = await this._db.product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: this._db.category,
        attributes: ["name"],
      },
    });
    return result;
  }

  async GetProductById(id) {
    return await this._db.product.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
  }

  async CreateProduct(product) {
    return await this._db.product.create({
      id: product.id,
      categoryId: product.categoryId,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    });
  }
};
