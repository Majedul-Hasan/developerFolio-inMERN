import GithubDatActionType from "./githubDataActionType";


export const githubDataListReducer = (state = {githubData: []}, action) => {
  switch (action.type) {
    case GithubDatActionType.GITHUB_DATA_REQUEST:
      return {
        loading: true,
      };
    case GithubDatActionType.GITHUB_DATA_SUCCESS:
      return {
        loading: false,
        githubData: action.payload,
      };
    case GithubDatActionType.GITHUB_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
        githubData: JSON.parse(localStorage.getItem("githubDataList"))
      };
    
    default:
      return state;
  }
};