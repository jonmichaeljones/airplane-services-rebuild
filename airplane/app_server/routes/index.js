var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/airplane');


/* Locations Pages */
router.get('/', ctrlLocations.homelist);


/* Other pages */


//this reexports router with the adjustments made
module.exports = router;
