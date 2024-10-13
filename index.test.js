const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    afterAll(async () => {
        await sequelize.drop();  // Drop all tables from the database
        await sequelize.close(); // Close the connection to the database
      });

    test('can create a Band', async () => {
        // TODO - test creating a band
        const createdBand = await Band.create({name: 'Oasis', genre: 'Cringe'});
        expect(createdBand.name).toBe('Oasis');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const createdMusician = await Musician.create({name: 'Jimmy Hendrix', instrument: 'Guitar'});

        expect(createdMusician.name).toBe('Jimmy Hendrix');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const createdBand = await Band.create({name: 'Oasis', genre: 'Cringe'});
        const updatedBand = await createdBand.update({genre: 'Rock'})
        expect(updatedBand.name).toBe('Oasis');
        expect(updatedBand.genre).toBe('Rock');

    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const createdMusician = await Musician.create({name: 'Jimmy Hendrix', instrument: 'Guitar'});
        const updatedMusician = await createdMusician.update({instrument: 'Voice'});
        expect(updatedMusician.name).toBe('Jimmy Hendrix');
        expect(updatedMusician.instrument).toBe('Voice');

    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const createdBand = await Band.create({name: 'The Wailers', genre: 'Reggae'});
        let foundBand = await Band.findOne({where: {name: 'The Wailers'}});
        foundBand.destroy();
        let deletedBand = await Band.findOne({where: {name: 'The Wailers'}});
        // TODO - test deleting a musician
        expect(deletedBand).toBeNull();

    })

    test('can delete a Musician', async () => {
        const createdMusician = await Musician.create({name: 'Mozart', instrument: 'Piano'});
        let foundMusician = await Musician.findOne({where: {name: 'Mozart'}});
        foundMusician.destroy();
        let deletedMusician = await Musician.findOne({where: {name: 'Mozart'}});
        // TODO - test deleting a musician
        expect(deletedMusician).toBeNull();
    })
})