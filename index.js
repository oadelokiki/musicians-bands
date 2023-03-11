const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.Musician= Band.hasOne(Musician)

module.exports = {
    Band,
    Musician,
	
};


