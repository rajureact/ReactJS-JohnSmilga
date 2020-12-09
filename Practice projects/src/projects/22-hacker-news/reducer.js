import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_PAGE:
      if (action.payload == "inc") {
        // console.log("hi");
        if (state.page === 49) {
          return { ...state, page: 0 };
        }
        return { ...state, page: state.page + 1 };
      }
      if (action.payload == "dec") {
        // console.log("hi");
        if (state.page === 0) {
          return { ...state, page: 49 };
        }

        return { ...state, page: state.page - 1 };
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
