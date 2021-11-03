const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("activity", {  
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [0, 32]}
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring")
        }
    });
}