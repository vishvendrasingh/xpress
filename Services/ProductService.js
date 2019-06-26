var ProductModel = require('../Models/Product');
var UserModel = require('../Models/User');

module.exports.fetchProducts = (id) => {    
    var ProductRepository = require('../Repositories/ProductRepository');
    ProductModel.hasMany(UserModel, {foreignKey: 'id',sourceKey:'userid'});//correct and working
    return ProductRepository.fetchIncluded(id,[UserModel]);;
}