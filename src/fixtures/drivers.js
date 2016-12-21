import faker from 'faker';

export const driver = {
  name: faker.name.findName(),
  password: faker.internet.password(),
  phone: faker.phone.phoneNumberFormat(),
  status: faker.random.boolean(),
  auto: faker.company.catchPhraseAdjective(),
};

