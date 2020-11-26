
module.exports = class Cart{
    AddedOrUpdatedItemFromCart(modelDTO){
        let index=0;
        let products = modelDTO.products;

        //get item from list of products
        index=modelDTO.products.findIndex(product => product.id === modelDTO.product.id)
        products[index].subTotal =Math.round(((modelDTO.product.quantity * products[index].price) + Number.EPSILON) * 100) / 100;
        products[index].quantity = modelDTO.product.quantity;

        return this.calculateItems(products);
    }


    RemoveItemFromCart(modelDTO){
        let products=[];
        //remove item of products list
        products=modelDTO.products.filter(p=> p.id!==modelDTO.product.id);
        return this.calculateItems(products);
    }

    calculateItems(products){
        let total=0, initialValue=0, quantity=0;
        //sum quantity
        quantity= products.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity
        , initialValue);
        //total= sum of the subtotal of each product on the list
        total = products.reduce(
            (accumulator, currentValue) => accumulator + currentValue.subTotal
        , initialValue);

        return  {
            products:products,
            quantity:quantity,
            total:Math.round(((total) + Number.EPSILON) * 100) / 100
        }
    }
    

}