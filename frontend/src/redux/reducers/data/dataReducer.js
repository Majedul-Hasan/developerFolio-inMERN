import datActionType from "./dataActionType";


export const dataListReducer = (state = {info:[]}, action) => {
  switch (action.type) {
    case datActionType.DATA_LIST_REQUEST:
      return {
        loading: true,
      };
    case datActionType.DATA_LIST_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        
      };
    case datActionType.DATA_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
        //info: JSON.parse(localStorage.getItem("dataList"))
      };
    
    default:
      return state;
  }
};