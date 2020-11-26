//const db =require('../models');

module.exports =
    class CategoryService {
        constructor(db) { 
            this._db = db;
        }
        async GetCategories() {
            return await this._db.category.findAll();
        }
}