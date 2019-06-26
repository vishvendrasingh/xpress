var ProductService = require('../Services/ProductService');
var UserService = require('../Services/UserService');

exports.products = (req, res, next) => {
	ProductService.fetchProducts({id: '1'})
	.then((r)=> {
		res.json(r);
	});
};

exports.profile = (req, res, next) => {
	// res.json("hi");
	UserService.fetchUser({id: '1'})
	.then((r)=> {
		res.json(r);
	})


};