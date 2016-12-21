import faker from 'faker';

export const order = {
  client_id: faker.phone.phoneNumberFormat(),
  driver_id: faker.random.number(),
  from: faker.address.streetAddress(),
  to: faker.address.streetAddress(),
  state: faker.random.boolean(),
  price: faker.commerce.price(),
  comment: faker.lorem.paragraph(),
  created_at: faker.date.future(),
  updated_at: faker.date.future(),
};

export const existingCompleted = {
  "client_id": faker.phone.phoneNumber(),
  "driver_id": faker.random.number(),
  "from": faker.address.streetAddress(),
  "to": faker.address.streetAddress(),
  "state": true,
  "price": faker.commerce.price(),
  "comment": faker.lorem.paragraph(),
  "created_at": faker.date.future(),
  "updated_at": faker.date.future()
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
