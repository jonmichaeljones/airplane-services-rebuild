var mongoose = require('mongoose');


var climbTable = new mongoose.Schema({
	weight: Number,
	vfri_5: Number,
	vfri_10: Number,
	vfri15: Number,
	vclmb: Number
});

var flapsTable = new mongoose.Schema ({
	flap: String,
	weight: Number,
	altitude: Number,
	temperature: String,
	vr: Number,
	v2: Number
})


var landingTable = mongoose.Schema({
	flaps: String,
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number,
});

var airportTable = mongoose.Schema({
	name: String,
	IATA: String,
	ICAO: String,
	RunwayName: String,
	RunwayMag: Number,
	RunwayTrue: Number,
	RunwayLeng: Number
});

mongoose.model('ClimbTable', climbTable, 'climbTables');
mongoose.model('FlapsTable', flapsTable, 'flapsTables');
mongoose.model('LandingTable', landingTable, 'landingTables');
mongoose.model('AirportTable', airportTable, 'aiportTables');
