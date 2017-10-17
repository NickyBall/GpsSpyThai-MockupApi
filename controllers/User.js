'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.changepassword = function changepassword (req, res, next) {
  User.changepassword(req.swagger.params, res, next);
};

module.exports.getdevice = function getdevice (req, res, next) {
  User.getdevice(req.swagger.params, res, next);
};
