import NEWS_ACTION_TYPES from "./news.action.types";
import { newsAPI } from "../../api";
import { selectPerPage } from "./news.selectors";

const startNewsHeadlinesFetch = () => ({
  type: NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES
});

const newsHeadlinesFetchFail = (errorMsg) => ({
  type: NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES_FAIL,
  payload: errorMsg
});

const newsHeadlinesFetchSuccess = (newsHeadlines) => ({
  type: NEWS_ACTION_TYPES.FETCH_NEWS_HEADLINES_SUCCESS,
  payload: newsHeadlines
});

export const fetchNewsHeadlines =
  (query = { page: 1, sources: "bbc-news" }) =>
  async (dispatch, getState) => {
    try {
      dispatch(startNewsHeadlinesFetch());
      const perPage = selectPerPage(getState());
      query.pageSize = perPage;
      const response = await newsAPI.getNewsHeadlines(query);
      const headlines = response.articles;
      dispatch(newsHeadlinesFetchSuccess(headlines));
    } catch (err) {
      dispatch(newsHeadlinesFetchFail("There was a problem fetching the new headlines. Please try again"));
    }
  };
