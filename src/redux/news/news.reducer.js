import NEWS_ACTION_TYPES from "./news.action.types";

const INITIAL_STATE = {
  newsHeadlines: [],
  isLoading: true,
  errorMsg: null,
  perPage: 10
};

const newsReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES:
      return {
        ...prevState,
        isLoading: true
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES_FAIL:
      return {
        ...prevState,
        isLoading: false,
        errorMsg: action.payload
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        newsHeadlines: action.payload
      };
    default:
      return prevState;
  }
};

export default newsReducer;
