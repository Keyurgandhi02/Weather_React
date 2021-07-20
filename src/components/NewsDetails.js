import NewsDetailItem from "./NewsDetailItem";

const NewsDetails = (props) => {
  return (
    <div>
      <ul>
        {props.onNews.map((data) => {
          const {
            abstract,
            _id,
            headline: { main },
            byline: { original },
          } = data;

          return (
            <NewsDetailItem
              key={_id}
              abstract={abstract}
              headline={main}
              author={original}
            ></NewsDetailItem>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsDetails;
