const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

//Band.Musician = Band.hasOne(Musician)
Band.hasMany(Musician)
Musician.belongsTo(Band)

Band.hasMany(Song)
Song.hasMany(Band)

module.exports = {
    Band,
    Musician,
	Song	
};


