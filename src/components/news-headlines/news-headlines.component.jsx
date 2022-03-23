import "./news-headlines.styles.css";
import { connect } from "react-redux";
import { selectIsLoadingHeadlines, selectNewsHeadlines } from "../../redux/news/news.selectors";
import { fetchNewsHeadlines } from "../../redux/news/news.actions";
import Headline from "./headline/headline.component";
import { useEffect, useState } from "react";
import { Container, Form, Button } from "../../modules/bootstrap";

const NewsHeadlines = ({ headlines, isLoading, fetchHeadlines }) => {
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    fetchHeadlines();
  }, [fetchHeadlines]);

  const onSearchChange = (event) => {
    setKeyword(event.target.value);
  };

  const onSearchSubmit = () => {
    fetchHeadlines({ q: keyword, page: 1 });
  };

  return (
    <section className="news-headlines">
      <Container>
        <div className="news-headlines__search">
          <Form.Control
            onChange={onSearchChange}
            type="search"
            placeholder="Enter keywords here"
            aria-describedby="news search"
          />
          <Button onClick={onSearchSubmit} className="news-headlines__search-submit" variant="primary">
            Search
          </Button>
        </div>
        <div className="news-headlines__list">
          {headlines.map((headline, i) => (
            <Headline key={i} {...headline} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  headlines: selectNewsHeadlines(state),
  isLoading: selectIsLoadingHeadlines(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeadlines: (query) => dispatch(fetchNewsHeadlines(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsHeadlines);
