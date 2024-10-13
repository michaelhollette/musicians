const {Sequelize, sequelize, Model, DataTypes} = require('../db');

// TODO - define the Song model
class Song extends Model{};

Song .init({
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER

},{
    sequelize: sequelize,
    modelName: 'Song',
});

module.exports = {
    Song
};