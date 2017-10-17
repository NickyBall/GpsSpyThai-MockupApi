'use strict';

exports.changepassword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * changePassword (ChangePasswordItem)
  **/
    var examples = {};
  examples['application/json'] = {
  "result" : "success",
  "message" : "เปลี่ยนรหัสผ่านเสร็จสิ้น"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getdevice = function(args, res, next) {
  /**
   * parameters expected in the args:
  * accessToken (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "licensePlate" : "กข-1234 นนทบุรี",
  "deviceId" : "x1d4-u2s3"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

