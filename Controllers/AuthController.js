var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var UserService = require('../Services/UserService');

module.exports.authenticate = (req, res, next) => {
    
	UserService.authenticate({mobile: '+1-123456789',pin:'1111'})
	.then((r)=> {
		const payload = {
			userid: r[0].userid,
		};
			var token = jwt.sign(payload, req.app.get('superSecret'), {
                // expiresIn: 60 * 60 * 24 * 30
                expiresIn: req.app.get('tokenExpiration')
            });
            
            try {
                var decoded = jwt.verify(token,req.app.get('superSecret'));
            } catch(err) {
                // err
            }

		res.json({
            success: true,
            token: token
            ,decoded:decoded
          });
    });
};

Array.prototype.contains = function ( needle ) {
    for (i in this) {
        console.log( this[i]+'  '+needle);
       if (this[i] == needle) return true;
    }
    return false;
 }

module.exports.authMiddleware = (req, res, next) => {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
            if (err) {
              return res.json({ success: false, message: 'Failed to authenticate!' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
      });
  
    } else if(req.app.get('noAuthRoutes').contains(req.originalUrl)) {
        next();
    }else{
      return res.status(403).send({
          success: false,
          message: 'Missing token!'
      });
  
    }
};


module.exports.decode = (req, res, next) => {
    if(req.app.get('env') === 'development'){
        try{
            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            var decoded = jwt.verify(token,req.app.get('superSecret'));
            unixTime = Math.floor(new Date() / 1000);
        res.json({
            success: true,
            token: token,
            configTime:req.app.get('tokenExpiration'),
            now:unixTime
            ,decoded:decoded,
            TimeDifference:decoded.exp-decoded.iat,
        });
        }catch(e){
            res.json({
                success: false,
                message: 'T-Maybe Next Time!'
            });
        }
        
    }else{
        res.json({
            success: false,
            message: 'P-Maybe Next Time!'
        });
    }
};