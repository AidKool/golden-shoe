const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const { Shoe } = require('../models');

db.once('open', async () => {
  try {
    await Shoe.deleteMany({});
    const shoesLength = 20;
    for (let i = 0; i < shoesLength; i++) {
      await Shoe.create({
        model: 'shoe-' + faker.random.numeric(5),
        colour: faker.color.human(),
        image: faker.helpers.arrayElement([
          'https://res.cloudinary.com/dxe6c1nwr/image/upload/c_fill,h_411,q_auto:good,w_690/v1658667555/shoes-153310_960_720_jm3ycm.jpg',
          'https://res.cloudinary.com/dxe6c1nwr/image/upload/c_fill,h_411,q_auto:good,w_690/v1658667066/rainbow-colors-2405766_960_720_fguqvz.jpg',
          'https://res.cloudinary.com/dxe6c1nwr/image/upload/q_auto:good/v1658667441/shoes-1897708_960_720_vf0i2l.jpg',
          'https://res.cloudinary.com/dxe6c1nwr/image/upload/c_crop,h_411,q_auto:good,w_690/v1658667707/womens-shoes-178162_960_720_breerf.jpg',
          'https://res.cloudinary.com/dxe6c1nwr/image/upload/c_fill,h_411,q_auto:good,w_690/v1658667065/black-shoes-2752226_960_720_vsqipy.jpg',
        ]),
        gender: faker.helpers.arrayElement(['F', 'M']),
        price: faker.commerce.price(10, 500, 2),
        featured: Math.random() <= 0.25 ? true : false,
        deal: Math.random() <= 0.25 ? true : false,
        stock: [
          {
            size: '6.5',
            stock: Math.floor(Math.random() * 10),
          },
          {
            size: '7.5',
            stock: Math.floor(Math.random() * 10),
          },
          {
            size: '8.5',
            stock: Math.floor(Math.random() * 10),
          },
          {
            size: '9.5',
            stock: Math.floor(Math.random() * 10),
          },
        ],
      });
    }

    console.log('DB seeded');
    process.exit(0);
  } catch (err) {
    throw new Error(err.message);
  }
});
