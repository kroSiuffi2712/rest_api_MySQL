module.exports=(sequelize,DataTypes) =>{
    const order =sequelize.define("order",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderNumber:{
            type: DataTypes.STRING(20),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        customerId: {
            type: DataTypes.INTEGER
        },
        total:{
            type: DataTypes.DECIMAL(10,2),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },

    });
    order.associate = models =>{
        order.hasMany(models.orderItem, {
            onDelete:"cascade"
        });
    };
    return order;
};