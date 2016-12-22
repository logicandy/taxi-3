import faker from 'faker';
import fakerNL from 'faker/locale/nl';

export const driver = {
  name: faker.name.findName(),
  password: faker.internet.password(),
  phone: fakerNL.phone.phoneNumberFormat(1),
  status: faker.random.boolean(),
  auto: faker.company.catchPhraseAdjective(),
};

