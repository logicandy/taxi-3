import faker from 'faker';

export const client = {
  phone: faker.phone.phoneNumberFormat(),
  email: faker.internet.email(),
};


