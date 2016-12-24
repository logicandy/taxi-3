const apiUrl = process.env.REACT_APP_API_URI;

export const ROUTES = {
  ADMIN_ROUTES: {
    GET_ALL_ITEMS_ROUTES: {
      orders: `${apiUrl}/orders`,
      clients: `${apiUrl}/admins/index_client`,
      drivers: `${apiUrl}/admins/index_driver`,
      dispatchers: `${apiUrl}/admins/index_dispatcher`,
      admins: `${apiUrl}/admins`,
    },
  },
  DRIVER_ROUTES:{
    ACCEPT_ORDER: (id) =>`${apiUrl}/orders/${id}`,
  }
};