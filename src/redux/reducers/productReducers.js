import actionsTypes from "../actionsTypes";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      const added = state.products.concat(action.payload);
      return { products: added };

    case actionsTypes.DELETE:
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      return { products: filtered };

    case actionsTypes.UPDATE:
      const updated = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );

      return { products: updated };

    case actionsTypes.SORT_PRODUCTS:
      const newProductList = [...state.products].sort((a, b) => {
        if (action.payload === "asc") {
          return b.price - a.price;
        } else if (action.payload === "desc") {
          return a.price - b.price;
        } else {
          return products;
        }
      });

      return { products: newProductList };

    default:
      return state;
  }
};

export default productReducer;
