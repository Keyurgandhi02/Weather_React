import { Redirect, Route, Switch } from "react-router";
import "./App.css";

import Navigation from "./components/Navigation";
import News from "./components/News";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Search></Search>
          </Route>
          <Route path="/news">
            <News> </News>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
