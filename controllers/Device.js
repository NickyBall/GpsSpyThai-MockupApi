'use strict';

var url = require('url');


var Device = require('./DeviceService');


module.exports.gethistory = function gethistory (req, res, next) {
  Device.gethistory(req.swagger.params, res, next);
};

module.exports.getprofile = function getprofile (req, res, next) {
  Device.getprofile(req.swagger.params, res, next);
};
