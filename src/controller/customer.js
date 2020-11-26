import db from '../models';
import CustomerService from '../services/customerService';

const customerServiceInstance = new CustomerService(db);

module.exports = {
    index:async(req, res) =>{
        await customerServiceInstance.GetCustomer().then(customers=>{
            res.status(200).json(customers)
        }).catch(err=>{
            res.status(400).json(err);
        });
    },

    getCustomerById:async(req, res) =>{
        const {id} =req.params;
        await customerServiceInstance.getCustomerById(id).then(customer=>{
            res.status(200).json(customer===null?{}:customer)
        }).catch(err=>{
            res.status(400).json(err);
        });
    },

    getCustomerByEmail:async(req, res) =>{
            const {email}=req.params;
            await customerServiceInstance.GetCustomerByEmail(email).then(customer => {
                res.status(200).json({customer:customer, message:""});
            }).catch(function (err) {
                res.status(400).json(err);
            })
    },

    newCustomer:async(req, res) =>{
        const customerDTO=req.body;
        await customerServiceInstance.CreateCustomer(customerDTO)
        .then(result=> {
            const data = result;
            const customer = {
                id:data.id,
                fullName:data.fullName,
                identifier:data.identifier, 
                address:data.address,
                phoneNumber:data.phoneNumber,
                email:data.email
            }
            res.status(200).json(customer);
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        })
    }
}