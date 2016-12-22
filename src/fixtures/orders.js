import faker from 'faker';
import fakerNL from 'faker/locale/nl';


export const order = {
  id: faker.random.number(),
  client_id: fakerNL.phone.phoneNumberFormat(1),
  driver_id: faker.random.number(),
  from: faker.address.streetAddress(),
  to: faker.address.streetAddress(),
  state: faker.random.boolean(),
  price: faker.commerce.price(),
  comment: faker.lorem.paragraph(),
  created_at: `${faker.date.past()}`,
  updated_at: `${faker.date.past()}`,
};

export const existingCompleted = {
  id: faker.random.number(),
  client_id: fakerNL.phone.phoneNumberFormat(1),
  driver_id: faker.random.number(),
  from: faker.address.streetAddress(),
  to: faker.address.streetAddress(),
  state: true,
  price: faker.commerce.price(),
  comment: faker.lorem.paragraph(),
  created_at: `${faker.date.past()}`,
  updated_at: `${faker.date.past()}`,
};


export const blank = {
  "client_id": "",
  "driver_id": "",
  "from": "",
  "to": "",
  "state": false,
  "price": "",
  "comment": "",
  "created_at": "",
  "updated_at": ""
};

export const ordersArray = ((length) => {

  let orders = [];

  for (let i = 0; i < length; i++) {

    const order = {
      id: faker.random.number(),
      client_id: fakerNL.phone.phoneNumberFormat(1),
      driver_id: faker.random.number(),
      from: faker.address.streetAddress(),
      to: faker.address.streetAddress(),
      state: faker.random.boolean(),
      price: faker.commerce.price(),
      comment: faker.lorem.paragraph(),
      created_at: `${faker.date.past()}`,
      updated_at: `${faker.date.past()}`,
    };

    orders.push(order);
  }

  return orders;
})(20);
