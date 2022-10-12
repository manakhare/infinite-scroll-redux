import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers";

const store = createStore(dataReducer, applyMiddleware(thunk));


//Reducer
// const dataReducer = (state = [], action) => {
//   switch (action.type) {
//     case "SET_CARS":
//       return [...action.payload];
//     default:
//       return state;
//   }
// };

// const reducer = combineReducers({ data: dataReducer });

// const store = createStore(reducer, applyMiddleware(thunk));



export default store;
