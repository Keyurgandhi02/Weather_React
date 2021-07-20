import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <ul className={classes.topnav}>
      <li>
        <NavLink activeClassName={classes.active} to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName={classes.active}>
          News
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
