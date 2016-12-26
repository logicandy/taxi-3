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
    GET_ITEM: {
      orders: (id) =>`${apiUrl}/orders/${id}`,
      clients: (id) =>`${apiUrl}/admins/${id}`,
      drivers: (id) =>`${apiUrl}/admins/show_driver?id=${id}`,
      dispatchers: (id) => `${apiUrl}/admins/show_dispatcher?id=${id}`,
      admins: (id) =>`${apiUrl}/admins/${id}`,
    },
    UPDATE: {
      orders: (id) =>`${apiUrl}/orders/${id}`,
      admins: (id) =>`${apiUrl}/admins/${id}`,
      dispatchers: (id) =>`${apiUrl}/admins/update_dispatcher?id=${id}`,
      drivers: (id) =>`${apiUrl}/admins/update_driver?id=${id}`,
    },
    CREATE: {
      orders: (id) =>`${apiUrl}/orders/${id}`,
      admins: (id) =>`${apiUrl}/admins/${id}`,
      dispatchers: `${apiUrl}/admins/create_dispatcher`,
      drivers: `${apiUrl}/admins/create_driver`,
    }
  },
  DRIVER_ROUTES: {
    ACCEPT_ORDER: (id) =>`${apiUrl}/orders/${id}/apply`,
    GET_ORDERS: `${apiUrl}/orders`,
    COMPLETE_ORDER: (id) =>`${apiUrl}/orders/${id}/complete`,
  },
  COMMON: {
    GET_ORDER: (id) =>`${apiUrl}/orders/${id}`,
    CREATE_ORDER: `${apiUrl}/orders`,
    SIGN_IN: {
      drivers: `${apiUrl}/drivers`,
      dispatchers: `${apiUrl}/dispatchers`,
      admins: `${apiUrl}/auth_admin`,
    },
  },
};