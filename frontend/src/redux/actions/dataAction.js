import axios from "axios";


import datActionType from "../reducers/data/dataActionType";
import GithubDatActionType from "../reducers/githubData/githubDataActionType";





export const listData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: datActionType.DATA_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:4050/api/data`);
      // localStorage.setItem('dataList', JSON.stringify(data))


    dispatch({
      type: datActionType.DATA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: datActionType.DATA_LIST_FAIL,
      payload: message,
    });
  }
};



export const listDataGithub = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GithubDatActionType.GITHUB_DATA_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:4050/api/data/github`);
       localStorage.setItem('githubDataList', JSON.stringify(data))

    dispatch({
      type: GithubDatActionType.GITHUB_DATA_SUCCESS,
      payload: data,
      

    });


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: GithubDatActionType.GITHUB_DATA_FAIL,
      payload: message,
    });
  }
};


