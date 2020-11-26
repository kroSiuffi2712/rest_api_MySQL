module.exports=(sequelize,DataTypes) =>{
    const customer =sequelize.define("customer",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING(100),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        identifier: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        address:{
            type: DataTypes.STRING(255),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        phoneNumber: {
            type: DataTypes.STRING(15)
        },
        email:{
            type: DataTypes.STRING(30),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    });
    customer.associate = models =>{
        customer.hasMany(models.order, {
            onDelete:"cascade"
        });
    };
    return customer;
};