module.exports=(sequelize,DataTypes) =>{
    const category =sequelize.define("category",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    });
    category.associate = models =>{
        category.hasMany(models.product, {
            onDelete:"cascade"
        });
    };
    return category;
};