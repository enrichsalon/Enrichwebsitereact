const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, loading: true };
    case 'PRODUCTS_RECEIVED':
      return { ...state, products: action.json[0], loading: false }
    case 'GET_MEGA_MENU':
      return { ...state, loading: true };
    case 'MEGA_MENU_RECEIVED':
      return { ...state, megaMenu: action.json[0], loading: false }
    default:
      return state;
  }
};

export default reducer;
