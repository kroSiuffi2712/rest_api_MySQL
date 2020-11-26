module.exports =
    class CustomerService {
        constructor(db) { 
            this._db = db;
        }

    async GetCustomer(){
        return await this._db.customer.findAll();
    }

    async GetCustomerById(id){
        return await this._db.customer.findByPk(id);
    }

    async GetCustomerByEmail(email){
        return await this._db.customer.findOne({where:{email:email}});

    }

    async CreateCustomer(customer){
        //check if mail already exists.
        const email = await this.GetCustomerByEmail(customer.email);
        
        //create customer if not exist
        if (email===null){
            return await this._db.customer.create({ 
                id:0, 
                fullName:customer.fullName, 
                identifier:customer.identifier,
                address:customer.address,
                phoneNumber:customer.phoneNumber,
                email:customer.email
                });
            }
        //else return the customer assocciated with the email.
        //Note:the app should not save it and the front-end show warning(it's only for test.)
        else return email;
    }
}