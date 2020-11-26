import express from 'express';

const router = express.Router();
const {index} =require('../controller/category');

router.get('/', index);

module.exports=router;