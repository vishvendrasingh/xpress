/***
 * put repository inside only to prevent conflict
 */

var UserModel = require('../Models/User');
var ProductModel = require('../Models/Product');
var UserLoginModel = require('../Models/UserLogin');

module.exports.fetchUser = (id) => {
    var UserRepository = require('../Repositories/UserRepository');
    UserModel.hasOne(ProductModel, {foreignKey: 'userid',sourceKey: 'id'});
    return UserRepository.fetchIncluded(id,[ProductModel]);
}

module.exports.authenticate = (params) => {    
    var UserLoginRepository = require('../Repositories/UserLoginRepository');    
    UserLoginModel.hasOne(UserModel, {foreignKey: 'id',sourceKey:'userid'});
    return UserLoginRepository.fetchIncluded({pin:params.pin},[
        {
            model: UserModel,
            where: {
                mobile: params.mobile
            }
        }]);
}