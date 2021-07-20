import { useCallback, useState } from "react";
import Card from "../UI/Card";
import SearchForm from "./SearchForm";
import ClockCard from "../UI/ClockCard";
import SearchList from "./SearchList";
import classes from "../UI/Layout.module.css";
import Image from "../UI/Image";

const Search = () => {
  const API_KEY = "b1db58c8d27a4e796f52affb2f5ae14e";
  const [isData, setData] = useState([]);
  const [isError, setError] = useState(null);
  const AllData = useCallback(async (Search) => {
    const abortCont = new AbortController(); //abort fetching data
    const SearchData = [];
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=${API_KEY}`,
        { signal: abortCont.signal }
      );
      if (!response.ok) {
        throw new Error("No Data Found!! ");
      }

      const data = await response.json();

      SearchData.push(data);
      setData(SearchData);
    } catch (error) {
      setError(error.message);
      if (error.name === "AbortError") {
        return null;
      }
    }
    return () => abortCont.abort();
  }, []);

  return (
    <div>
      <div className={classes.row}>
        <SearchForm onSerach={AllData}></SearchForm>
        <div className={classes.column1}>
          <ClockCard></ClockCard>
        </div>
        <div className={classes.column2}>
          {isData.length === 0 && !isError ? (
            <Image></Image>
          ) : (
            <Card>
              <h2>{isError}</h2>
              {isError === null && (
                <SearchList searchValue={isData}></SearchList>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
