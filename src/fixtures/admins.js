import faker from 'faker';

export const admin = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

