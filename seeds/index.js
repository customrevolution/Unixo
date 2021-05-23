const mongoose = require('mongoose');
const Kick = require('../models/kick');
const Colection = require('../models/colection');
const { names, links } = require('./seedHelpers');


mongoose.connect('mongodb+srv://Boss:jAf7sNefCQYxl88B@cluster0.6clau.mongodb.net/unixo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected')
})

const seedDB = async () => {
    await seedKicks();
    // await seedCollections();
}

const seedKicks = async function () {
    await Kick.deleteMany({});

    // Seeding first 4 kicks with 1st collection as reference
    for (let i = 0; i < 4; i++) {
        let rand270 = Math.floor(Math.random() * 270) + 220;
        let shopIdSample = 69001 + i;
        const kick = new Kick({
            name: names[i],
            image: 'https://i.ibb.co/' + links[i],
            price: rand270,
            colection: '6083482187f9fc2f78042d11',
            shopId: shopIdSample

        })
        await kick.save().then(res => console.log(res))
    }

    // Seeding second 4 kicks with 2nd collection as reference
    for (let i = 4; i < 8; i++) {
        let rand270 = Math.floor(Math.random() * 50) + 200;
        let shopIdSample = 69001 + i;
        const kick = new Kick({
            name: names[i],
            image: 'https://i.ibb.co/' + links[i],
            price: rand270,
            colection: '6083482187f9fc2f78042d12',
            shopId: shopIdSample
        })
        await kick.save().then(res => console.log(res))
    }

    // Seeding third 4 kicks with 3rd collection as reference
    for (let i = 8; i < 12; i++) {
        let rand270 = Math.floor(Math.random() * 270) + 220;
        let shopIdSample = 69001 + i;
        const kick = new Kick({
            name: names[i],
            image: 'https://i.ibb.co/' + links[i],
            price: rand270,
            colection: '6083482187f9fc2f78042d13',
            shopId: shopIdSample
        })
        await kick.save().then(res => console.log(res))
    }
}

const seedCollections = async function () {
    await Colection.deleteMany({});

    const firstCollection = await Kick.find({ shopId: { $in: [69001, 69002, 69003, 69004] } });
    const secondCollection = await Kick.find({ shopId: { $in: [69005, 69006, 69007, 69008] } });
    const thirdCollection = await Kick.find({ shopId: { $in: [69009, 69010, 69011, 69012] } });

    const firstImage = ['/images/collections/collection1.jpg'];
    const secondImage = ['/images/collections/collection2.jpg'];
    const thirdImage = ['/images/collections/collection3.jpg'];

    const sample = [
        { name: 'The Journey', collectionId: '11001', kicks: firstCollection, images: firstImage },
        { name: 'Young Blood', collectionId: '11002', kicks: secondCollection, images: secondImage },
        { name: 'Dreams Of Sky', collectionId: '11003', kicks: thirdCollection, images: thirdImage }]
    await Colection.insertMany(sample).then(res => console.log(res));
}

seedDB().then(() => {
    mongoose.connection.close();
});


