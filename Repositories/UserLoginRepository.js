/*** 
 * UserModelRepository 
 **/

const BaseRepository = require('./BaseRepository');
const UserLoginModel = require('../Models/UserLogin');

BaseRepository.setModel(UserLoginModel);

module.exports = BaseRepository;