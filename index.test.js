const {sequelize} = require('./db');
const {Band, Musician, Song} = require('./index')

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
        
	//TODO --> test creating a musician
	
	let testMusician = await Musician.create({
		name: "ben",
		instrument: "oboe"
	})
	
        expect(testMusician.name).toBe('ben');
	expect(testMusician.instrument).toBe('oboe')
    	
    })

    test('one to many association', async () => {
	let testBand = await Band.create({
		name: "the jets",
		genre: "rock",
		
		Musicians: [ {
			name: "benny",
			instrument: "guitar"
		}]

	}, {
		include: [
			//Band.Musician	
			Musician
		]	
	})
		console.log(testBand.Musicians)
	expect(testBand.Musicians[0].name).toBe("benny")
	})

	test('many to many association', async () => {
        
	const testBand = await Band.create({
                name: "the jets",
                genre: "rock",
                Musicians: [{
                        name: "benny",
                        instrument: "guitar"
                	
		}],
		Songs: [{
			title: "rocket man",
			year: 1901,

		}, {
			title: "these are alright",
			year: 2012,

		}]
        }, {
                include: [
                        //Band.Musician
			Musician, Song,
                
		]
        })
                console.log(testBand.Songs)

	// TODO now query for bands with a particular song, and songs with a particular band

	let partSongResults = await testBand.getSongs();

	console.log(partSongResults.Songs);

        expect(partSongResults.length).toBe(2)

	let testSong = await Song.create({
		title: "hello there knowledge",
		year: 2021,
		Bands: [{
			name: "the thrills",
			genre: "indie",
			Musicians: []
		}, {
			name: "the beatles",
			genre: "indie",
			Musicians: []
		}]
		
	}, {
		include: [
			Band, 
		]
	})
	
	let partBandResults = await testSong.getBands();
	console.log("your results" + partBandResults);
	expect(partBandResults.length).toBe(2)
        })

})
