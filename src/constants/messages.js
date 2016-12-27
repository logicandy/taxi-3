export const MESSAGES = {
  UNEXPECTED_ERROR_MESSAGE: 'Unexpected error',
  ORDERS: {
    COMPLETE: `You successfully completed an order`,
    ACCEPT: (id) => `You successfully accepted an order ${id}`,
    SUCCESS: 'Order was added',
  },
  ERRORS: {
    phone: 'Mobile phone should have 10 numbers length',
    email: 'Your email is incorrect',
  },
  ADMIN:{
    UPDATE: (entity) => `${entity} was successfully updated`,
    ERROR: `Something bad happened with server`,
    CREATE: (entity) => `${entity} was creates`,
    BLOCKED: `This user was blocked`,
  },
};
