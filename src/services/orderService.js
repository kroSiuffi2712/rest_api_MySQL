//const db =require('../models');
const Hashids = require('hashids/cjs')
const dotenv =require('dotenv');

dotenv.config();

module.exports =
    class OrderService {
        constructor(db) {
            this._db = db
         }

    async GetOrders(){
        return await this._db.order.findAll();
        
    }

    async GetOrderById(id){
        return await this._db.order.findByPk(id);
    }

    async CreateOrder(order){
        const hashids = new Hashids('', 6, process.env.ALPHABET); // pad to length 10
        try {

            const result = await this._db.sequelize.transaction(async (t) => {
                
                /*
                //Insert Customer
                const customer = await db.customer.create({ 
                id:0, 
                fullName:order.customer.fullName, 
                identifier:order.customer.identifier,
                address:order.customer.address,
                phoneNumber:order.customer.phoneNumber,
                email:order.customer.email
                },{ transaction: t });
                */
                
                //Inser Order
                const orderResult = await this._db.order.create(
                    { 
                        id:0, 
                        orderNumber:hashids.encode(Date.now()),
                        customerId:order.customerId,
                        total:order.total
                   }
                  , { transaction: t });
            
                //Adding orderId to orderItems 
                await order.orderItems.map(item=>{
                    item.orderId=orderResult.id
                });
                //insert items from an order
                const items = await this._db.orderItem.bulkCreate(
                    order.orderItems,
                    { transaction: t }
                    );
                
                return {orderResult, items};
            });
            return {orderNumber:result.orderResult.orderNumber, error:[]};
        } 
        catch (error) {
            return {orderNumber:null,error:error};
        }
    }
}