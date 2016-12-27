export const MESSAGES = {
  UNEXPECTED_ERROR_MESSAGE: `Unexpected error`,
  ORDERS: {
    COMPLETE: `You successfully completed an order`,
    ACCEPT: (id) => `You successfully accepted an order ${id}`,
    SUCCESS: `Order was added`,
    CANCELED: `Your request on order cancellation was send`,
  },
  ERRORS: {
    phone: `Mobile phone should have 10 numbers length`,
    email: `Your email is incorrect`,
  },
  ADMIN:{
    UPDATE: (entity) => `${entity} was successfully updated`,
    ERROR: `Something bad happened with server`,
    CREATE: (entity) => `${entity} was created`,
    BLOCKED: `This user was blocked`,
    DESTROY: `User was destroyed`,
  },
};
