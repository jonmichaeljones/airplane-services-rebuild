var mongoose = require('mongoose');
var ClimbTable = mongoose.model('ClimbTable');
var FlapsTable = mongoose.model('FlapsTable');
var LandingTable = mongoose.model('LandingTable');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET a location by the id */
module.exports.airplaneReadOne = function(req, res) {
  console.log('Finding airplane details', req.params);
  if (req.params && req.params.Flapsid) {
    LandingTable
      .findById(req.params.Flapsid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "Flapsid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No Flapsid specified');
    sendJSONresponse(res, 404, {
      "message": "No Flapsid in request"
    });
  }
};

module.exports.flapsReadOne = function(req, res) {
  console.log('Finding airplane details', req.params);
  if (req.params && req.params.flapsid) {
    FlapsTable
      .findById(req.params.flapsid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flapsid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flapsid specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsid in request"
    });
  }
};

module.exports.landingReadOne = function(req, res) {
  console.log('Finding airplane details', req.params);
  if (req.params && req.params.flapsid) {
    LandingTable
      .findById(req.params.flapsid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flapsid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flapsid specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsid in request"
    });
  }
};

