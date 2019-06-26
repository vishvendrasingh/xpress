/*** 
### Experiments - Done
- Highly structured code

###Experiments - Todo 
- Ref : https://github.com/expressjs/express/blob/4.13.1/examples/route-map/index.js#L52-L66

*/

/**
*** Basic Modules
**/
var express = require('express');
var router = express.Router();

/**
*** Controllers
**/
var BaseController = require('../Controllers/BaseController');
var UserController = require('../Controllers/UserController');
var AuthController = require('../Controllers/AuthController');

/**
*** Routes
**/

// router.use(AuthController.authMiddleware)//router auth middleware

router.all('/', function(req, res, next) {
  res.json({'success':true, message:'Welcome to Xpress'});
});

router.all('/list', function(req, res, next) {
  res.json({'success':true, 'message':router.stack});
});

router.get('/auth', AuthController.authenticate);
router.get('/auth/decode', AuthController.decode);// for testing only
router.get('/user/products', UserController.products);
router.get('/user/profile', UserController.profile);

module.exports = router;
