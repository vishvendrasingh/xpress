/*** Table Name ***/
var tableName = 'user_login';

/*** Same for all Models */
const Base = require('./Base');
class UserLogin extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return UserLogin.init({
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		pin: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'pin'
		},
		userid: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'userid'
		}
    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var UserLoginModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = UserLoginModel;