import classes from "../UI/DataCard.module.css";
const SearchItem = (props) => {
  const kelvin = props.temp;
  const cels = Math.ceil(kelvin - 273.15);
  const MinTemp = Math.ceil(props.tempMin - 273.15);
  const MaxTemp = Math.ceil(props.tempMax - 273.15);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1 className={classes.heading} id="city">
            {props.name},{props.country}
            <br></br>
          </h1>
          <h1 className={classes.heading}>{cels}ºC</h1>
          {/* <div id="graphic" className={classes["weather-icon"]}></div> */}
          <div id="description" className={classes["important-info text"]}>
            {props.desc}
          </div>
          <div id="farenheit" className={classes["temp-info"]}></div>
          <div id="celsius" className={classes["temp-info"]}></div>
        </div>
      </div>
      <div className={classes["description-container"]}>
        <div className={classes["block-1"]}>
          <div className={classes["text"]}>
            <span>Max: </span>
            <span id="max" className={classes["important-info"]}>
              {MaxTemp}
            </span>
          </div>
          <div className="text">
            <span>Min: </span>
            <span id="min" className={classes["important-info"]}>
              {MinTemp}
            </span>
          </div>
        </div>
        <div className="block-2">
          <div id="longitude" className={classes["important-info"]}>
            Lon: {props.lon}
          </div>
          <div id="latitude" className={classes["important-info"]}>
            Lat: {props.lat}
          </div>
        </div>
        <div className="block-3">
          <div id="humidity" className={classes["important-info"]}>
            Humidity: {props.humidity}
          </div>
          <div id="pressure" className={classes["important-info"]}>
            Pressure: {props.pressure}
          </div>
          <div id="windSpeed" className={classes["important-info"]}>
            Speed: {props.speed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
