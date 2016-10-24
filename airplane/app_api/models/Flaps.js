var mongoose = require('mongoose');


var climbTable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
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



mongoose.model('ClimbTable', climbTable, 'climbTables');
mongoose.model('FlapsTable', flapsTable, 'flapsTables');
mongoose.model('LandingTable', landingTable, 'landingTables');
