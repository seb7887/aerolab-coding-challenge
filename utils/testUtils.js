import faker from 'faker';

export const fakeUser = {
  name: 'John Kite',
  points: '7000'
};

export const mockCategories = [
  'all',
  'gaming',
  'laptops',
  'tablets',
  'cameras',
  'audio',
  'tv',
  'drones',
  'accessories',
  'home'
];

export const fakeProduct = {
  _id: 7,
  name: 'iPhone',
  category: 'Phones',
  cost: 800,
  img: {
    url: '/static/image/image.png'
  }
};

export const generateProduct = () => {
  const newProduct = {
    _id: faker.random.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    cost: 800,
    img: {
      url: faker.image.imageUrl()
    }
  };
  return newProduct;
};

export const fakeProducts = [fakeProduct];

export const generateProducts = quantity => {
  let products = [];

  for (let i = 0; i < quantity; i++) {
    const newProduct = generateProduct();
    products.push(newProduct);
  }

  return products;
};

export const fakeHistoryItem = {
  _id: fakeProduct._id,
  name: fakeProduct.name,
  category: fakeProduct.category,
  img: {
    url: fakeProduct.img.url
  },
  createDate: '2019-04-24T22:17:54.492Z'
};

export const fakeHistoryItems = [fakeHistoryItem];
