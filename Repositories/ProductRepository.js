/*** 
 * ProductRepository 
 **/

const BaseRepository = require('./BaseRepository');
const ProductModel = require('../Models/Product');

BaseRepository.setModel(ProductModel);

module.exports = BaseRepository;