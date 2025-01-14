const { DataTypes } = require('sequelize');

const Products = (sequelize) => {
	sequelize.define('products', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        href: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageSrc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageAlt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subcategory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
			type: DataTypes.FLOAT,
		},
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true // Puedes establecer el valor predeterminado como "true" (activo)
        }
    }, {
      modelName: 'Products',
      timestamps: false,
      freezeTableName: true,
    });
};

module.exports = Products;
