import classes from "../UI/Image.module.css";
import image from "../assets/images/nodata.webp";
const Image = () => {
  return (
    <div className={classes.header}>
      <img src={image} alt="searchImage" />
      <h4>Search For Weather⛈⛅</h4>
    </div>
  );
};

export default Image;
