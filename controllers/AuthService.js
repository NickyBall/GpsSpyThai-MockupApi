'use strict';

exports.authenticate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authenticate (AuthenticateItem)
  **/
    var examples = {};
  examples['application/json'] = {
  "uid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "AccessToken" : "dwjn93h938hg9qp3ubp9bbp9p9bn39b93un3"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

