const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
	let testBand = await Band.create({
		name: "Benny",
		genre: "Rock"
	})
        expect(testBand.name).toBe('Benny');
    	expect(testBand.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
	let testMusician = await Musician.create({
		name: "ben",
		instrument: "oboe"
	})
        expect(testMusician.name).toBe('ben');
	expect(testMusician.instrument).toBe('oboe')
    })
})
