var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/airplane');


router.get('/Flaps', ctrlLocations.airplaneReadOne);
router.get('/Flaps/:Flapsid', ctrlLocations.airplaneReadOne);

router.get('/flap', ctrlLocations.flapsReadOne);
router.get('/flap/:flapsid', ctrlLocations.flapsReadOne);

router.get('/landing', ctrlLocations.landingReadOne);
router.get('/landing/:landingid', ctrlLocations.landingReadOne);


module.exports = router;
