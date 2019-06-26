/*** Table Name ***/
var tableName = 'users';

/*** Same for all Models */
const Base = require('./Base');
class User extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return User.init({
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'email'
		},
		emailVerifiedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'email_verified_at'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'password'
		},
		rememberToken: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'remember_token'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'created_at'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updated_at'
		},
		mobile: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'mobile'
		}
    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var UserModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = UserModel;