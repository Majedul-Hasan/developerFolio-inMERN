import { combineReducers } from "redux";
import { dataListReducer } from "./data/dataReducer";
import { githubDataListReducer } from "./githubData/githubDataReducer";





const rootReducer = combineReducers({
    dataList: dataListReducer,
    githubDataList: githubDataListReducer
    
  
});

export default rootReducer;