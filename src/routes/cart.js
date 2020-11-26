import express from 'express';

const router = express.Router();

const {addOrUpdateCart,removeItemFromCart} = require('../controller/cart');

router.post('/calculateAddedOrUpdatedItem', addOrUpdateCart);
router.put('/calculateRemovedItem', removeItemFromCart);

module.exports=router;