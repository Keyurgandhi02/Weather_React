import classes from "./Card.module.css";
const Card = (props) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Card;
