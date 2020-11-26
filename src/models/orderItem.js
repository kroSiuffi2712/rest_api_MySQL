module.exports=(sequelize,DataTypes) =>{
    const orderItem =sequelize.define("orderItem",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true
            }
        },
        quantity:{
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true
            }
        },
        price:{
            type: DataTypes.DECIMAL(10,2),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    });
    return orderItem;
};