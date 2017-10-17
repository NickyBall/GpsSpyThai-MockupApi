'use strict';

exports.gethistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  * startDate (String)
  * endDate (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "energyType" : "Oil",
  "licensePlate" : "กข-1234 นนทบุรี",
  "driver" : "สมชาย ใจดี",
  "ioStatus" : "off",
  "time" : "14-Oct-2017 11:57:25",
  "energyRemain" : 58.77,
  "nearby" : "วัดป่าอดุลย์ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000",
  "speed" : 78.25,
  "status" : "Stop(14-Oct-2017)"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getprofile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "energyType" : "Oil",
  "licensePlate" : "กข-1234 นนทบุรี",
  "driver" : "สมชาย ใจดี",
  "ioStatus" : "off",
  "time" : "14-Oct-2017 11:57:25",
  "energyRemain" : 58.77,
  "nearby" : "วัดป่าอดุลย์ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000",
  "speed" : 78.25,
  "status" : "Stop(14-Oct-2017)"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

