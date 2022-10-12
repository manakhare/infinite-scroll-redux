

const initialState = {
  items: [],
  page: 1,
  loading: false,
  err: null,
};

const dataReducer = (state = initialState, action) => {
//   console.log(action);
  switch (action.type) {
    case "LOAD_MORE_ITEMS":
      return { ...state };
    // break;

    case "SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        items: [...state.items, ...action.payload.data],
      };

    case "FAILED":
      return {
        ...state,
        err: action.payload.err,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "IS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default dataReducer;
