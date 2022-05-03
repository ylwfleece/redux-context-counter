const REMOVE_STOCK = "application/removeStock";
const ADD_STOCK = "application/addStock";

const addStock = () => {
    return {
        type: ADD_STOCK
    }
}

const removeStock = () => {
  return {
    type: REMOVE_STOCK,
  };
};

export const incrementStock = () => async (dispatch) => {
    dispatch(addStock());
    return;
}

export const decrementStock = () => async (dispatch) => {
    dispatch(removeStock());
    return;
}

const initialState = {
    stocks: 0
};

const applicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return {
          stocks: state.stocks + 1
      }
      case REMOVE_STOCK:
      return {
          stocks: state.stocks - 1
      }
    default:
      return state;
  }
};

export default applicationsReducer;