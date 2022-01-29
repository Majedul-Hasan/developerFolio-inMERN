import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import rootReducer from "./reducers/rootReducer";



const dataFromLocalStorage = localStorage.getItem("dataList")
  ? JSON.parse(localStorage.getItem("dataList"))
  : null;

  const githubDataFromLocalStorage = localStorage.getItem("githubDataList")
  ? JSON.parse(localStorage.getItem("githubDataList"))
  : null;



const INITIAL_STATE = {

  
    dataList: dataFromLocalStorage,
    githubDataList: githubDataFromLocalStorage,


 
};

const middleware = [thunk];
/*
//github.com/zalmoxisus/redux-devtools-extension
https: import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
*/

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;