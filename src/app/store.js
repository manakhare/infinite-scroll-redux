import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

//Reducer
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CARS":
      return [...action.payload];
    default:
      return state;
  }
};

const reducer = combineReducers({ data: dataReducer });

const store = createStore(reducer, applyMiddleware(thunk));

//fetch API
export function fetchCars() {
  return async function (dispatch) {
    const res = await axios.get("https://reqres.in/api/users/?page=1");
    const fetchedCars = res.data;
    dispatch({
      type: "SET_CARS",
      payload: fetchedCars.data,
    });
    // return axios.get("https://stg.carwale.com/api/stocks#").then(({ data }) => {
    //   dispatch(fetchCars(data));
  };
}

export default store;
