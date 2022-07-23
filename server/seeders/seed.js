const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const { Stock, Shoe } = require('../models');

db.once('open', async () => {
  try {
    await Shoe.deleteMany({});
    const shoesLength = 20;
    for (let i = 0; i < shoesLength; i++) {
      await Shoe.create({
        model: 'shoe-' + faker.random.numeric(3),
        colour: faker.color.human(),
        image: faker.helpers.arrayElement([
          'https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png',
          'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_960_720.jpg',
          'https://cdn.pixabay.com/photo/2013/09/01/18/12/womens-shoes-178162_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/06/15/15/55/rainbow-colors-2405766_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/09/15/13/28/black-shoes-2752226_960_720.jpg',
        ]),
        gender: faker.helpers.arrayElement(['F', 'M']),
        price: faker.commerce.price(10, 500, 2),
        featured: faker.helpers.arrayElement([
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]),
        deal: faker.helpers.arrayElement([
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ]),
      });
    }

    for (let i = 0; i < shoesLength; i++) {
      await Stock.create({
        size: faker.helpers.arrayElement([
          '3',
          '3.5',
          '4',
          '4.5',
          '5',
          '5.5',
          '6',
          '6.5',
          '7',
          '7.5',
          '8',
          '8.5',
          '9',
          '9.5',
          '10',
          '10.5',
          '11',
          '11.5',
          '12',
          '12.5',
          '13',
        ]),
        stock: Number(faker.random.numeric(1)),
      });
    }

    const shoes = await Shoe.find({});
    const stocks = await Stock.find({});
    let i = 0;
    for (const shoe of shoes) {
      shoe.stock = stocks[i]._id;
      await shoe.save();
      i++;
    }

    console.log('DB seeded');
    process.exit(0);
  } catch (err) {
    throw new Error(err.message);
  }
});
