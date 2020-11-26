import db from '../models';
import Categoryservice from '../services/categoryService';

const categoryServiceInstance = new Categoryservice(db);

module.exports = {
    index: async (req, res) => {
        await categoryServiceInstance.GetCategories().then(categories=>{
            if (categories.length>0)
                res.status(200).json(categories)
            else
                res.status(200).json([])
        }).catch(err=>{
            res.status(400).json(err);
        });
    }
}