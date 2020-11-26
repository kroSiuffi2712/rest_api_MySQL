import express from 'express';

const router =express.Router();
const {index, getCustomerById,getCustomerByEmail, newCustomer} =require('../controller/customer');

router.get('/', index);
router.get('/:email', getCustomerByEmail);
//router.get('/:id', getCustomerById);
router.post('/', newCustomer);

module.exports=router;