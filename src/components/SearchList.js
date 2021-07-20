import SearchItem from "./SearchItems";

const SearchList = (props) => {
  return (
    <div>
      <ul>
        {props.searchValue.map((data) => (
          <SearchItem
            key={data.id}
            name={data.name}
            humidity={data.main.humidity}
            country={data.sys.country}
            desc={data.weather[0].main}
            temp={data.main.temp}
            tempMax={data.main.temp_max}
            tempMin={data.main.temp_min}
            pressure={data.main.pressure}
            speed={data.wind.speed}
            lat={data.coord.lat}
            lon={data.coord.lon}
          ></SearchItem>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
