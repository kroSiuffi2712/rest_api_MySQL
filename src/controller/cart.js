//import  db from '../models';
import service from '../services/cartServices';

const cartService = new service();

module.exports = {
    addOrUpdateCart:(req, res) =>{
        const modelDTO =req.body;
        const result = cartService.AddedOrUpdatedItemFromCart(modelDTO);
        
        res.status(200).json(result);
    },
    removeItemFromCart:(req, res) =>{
        const modelDTO =req.body;
        const result = cartService.RemoveItemFromCart(modelDTO);
        
        res.status(200).json(result);
    }
}