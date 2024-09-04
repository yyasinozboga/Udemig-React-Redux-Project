import actionsTypes from "../actionsTypes";

const initialState = {
  products: [],
  isOpen: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      return state;

    case actionsTypes.OPEN:
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};

export default productReducer;
