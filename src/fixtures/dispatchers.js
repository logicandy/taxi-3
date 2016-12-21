import faker from 'faker';

export const dispatcher = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

