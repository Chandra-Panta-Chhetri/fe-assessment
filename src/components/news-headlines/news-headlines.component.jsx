import "./news-headlines.styles.css";
import { connect } from "react-redux";
import { selectIsLoadingHeadlines, selectNewsHeadlines } from "../../redux/news/news.selectors";
import { fetchNewsHeadlines } from "../../redux/news/news.actions";
import Headline from "./headline/headline.component";
import { useEffect } from "react";

const NewsHeadlines = ({ headlines, isLoading, fetchHeadlines }) => {
  useEffect(() => {
    fetchHeadlines();
  }, [fetchHeadlines]);

  return <section className="news-headlines">Headlines Here</section>;
};

const mapStateToProps = (state) => ({
  headlines: selectNewsHeadlines(state),
  isLoading: selectIsLoadingHeadlines(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeadlines: () => dispatch(fetchNewsHeadlines())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsHeadlines);
