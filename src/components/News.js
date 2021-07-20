import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Loading from "../UI/Loader";
import NewsDetails from "./NewsDetails";
const News = () => {
  const API_KEY = "qr8S0d1avODUxmhHWRvkOtrezLP6hxwG";
  const newsValue = "Weather";
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortCont = new AbortController();
    const fetchNewsHandler = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsValue}&api-key=${API_KEY}`,
        { signal: abortCont.signal }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const data = await response.json();

      setNews(data.response.docs);
      setIsLoading(false);
    };
    fetchNewsHandler().catch((error) => {
      setIsError(error.message);
      if (error.name === "AbortError") {
        return null;
      }
    });
    return () => abortCont.abort();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="centered">
          <Loading></Loading>
        </div>
      )}

      {!isLoading && isError && (
        <Card>
          <h2>{isError}</h2>
        </Card>
      )}
      {!isLoading && !isError && <NewsDetails onNews={news}></NewsDetails>}
    </div>
  );
};

export default News;
