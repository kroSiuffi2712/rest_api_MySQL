module.exports=(sequelize,DataTypes) =>{
    const product =sequelize.define("product",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryId: {
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },

        title: {
            type: DataTypes.STRING(50),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull:false,
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
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    });
    product.associate = models =>{
        product.hasMany(models.orderItem, {
            onDelete:"cascade"
        })
        ,product.belongsTo(models.category, {
            onDelete:"cascade"
        })
    };
    return product;
};