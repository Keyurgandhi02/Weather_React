import classes from "../UI/NewsCard.module.css";
const NewsDetailItem = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.headline}</h1>
      <p className={classes.title}>{props.author}</p>
      <p>{props.abstract}</p>
    </div>
  );
};

export default NewsDetailItem;
