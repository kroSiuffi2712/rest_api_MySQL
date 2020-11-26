import express from 'express';

const router = express.Router();
const {index,getOrder, newOrder } =require('../controller/order');

router.get('/', index);
router.get('/:id', getOrder);
router.post('/', newOrder);

module.exports=router;