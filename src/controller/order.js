import db from '../models';
import OrderService from '../services/orderService';

const orderServiceInstance = new OrderService(db);

module.exports = {
    index:async(req, res) =>{
        await orderServiceInstance.GetOrders().then(orders=>{
            res.status(200).json(orders)
        }).catch(err=>{
            res.status(400).json(err);
        });
    },

    getOrder:async(req, res) =>{
        const {id} =req.params;
        await orderServiceInstance.GetOrderById(id).then(order=>{
            res.status(200).json(order===null?{}:order)
        }).catch(err=>{
            res.status(400).json(err);
        });
    },

    newOrder:async(req, res) =>{
        const orderDTO= req.body;
        console.log(orderDTO);
        // Call to service layer.
        await orderServiceInstance.CreateOrder(orderDTO).then(result=>{
            res.status(200).json({orderNumber:result.orderNumber});
        }).catch(err=>{
            res.status(500).json({err});
        });

        /*
        const result= await orderService.CreateOrder(orderDTO);
        if (result.orderNumber!==null)
            return res.status(200).json({orderNumber:result.orderNumber});
        return res.status(500).json({error:result.error.ReferenceError});
        */
    }
}