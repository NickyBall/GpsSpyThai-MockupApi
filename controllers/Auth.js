'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authenticate = function authenticate (req, res, next) {
  Auth.authenticate(req.swagger.params, res, next);
};
