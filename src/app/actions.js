import { IS_LOADING, SUCCESS, FAILED, LOAD_MORE_ITEMS, SET_PAGE } from "./actionTypes";
import axios from "axios";

export const loadMoreItems = (item) => {
    return {
        type: LOAD_MORE_ITEMS,
        payload: item
    };
}

export const success = (item) => {
    return {
        type: SUCCESS,
        payload: item
    };
}

export const failed = (err) => {
    return {
        type: FAILED,
        payload: err
    };
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    };
};

export const isLoading = (mark) => {
    return {
        type: IS_LOADING,
        payload: mark
    }
}

//fetch API
export const fetchData = (page=1) => {
    return async function (dispatch) {
      const res = await axios.get(`https://reqres.in/api/users/?page=${page}`);
      const fetchedData = res.data;
      console.log(fetchedData);
      dispatch(success({
        data: fetchedData.data,
    
      }))
    //   dispatch({
    //     type: "SUCCESS",
    //     payload: fetchedData.data,
    //   });
      // return axios.get("https://stg.carwale.com/api/stocks#").then(({ data }) => {
      //   dispatch(fetchCars(data));
    };
  }


