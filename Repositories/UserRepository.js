/*** 
 * UserModelRepository 
 **/

const BaseRepository = require('./BaseRepository');
const UserModel = require('../Models/User');

BaseRepository.setModel(UserModel);

module.exports = BaseRepository;