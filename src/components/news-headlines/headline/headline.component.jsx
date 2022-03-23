import { Card } from "../../../modules/bootstrap";
import "./headline.styles.css";

const Headline = ({ title, author, description, url, publishedAt }) => {
  return (
    <Card className="headline">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link target="_blank" rel="noreferrer" href={url}>
          Read More
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Headline;
