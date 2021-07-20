import { useRef } from "react";
import classes from "./SearchForm.module.css";
const SearchForm = (props) => {
  const inputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const searchValue = inputRef.current.value;
    props.onSerach(searchValue);
    inputRef.current.value = "";
  };
  return (
    <form className={classes.example} onSubmit={formSubmitHandler}>
      <input
        required
        type="text"
        placeholder="Search.."
        name="search"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
