import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import "./assets/css/App.scss";
import Home from "./components/Home";
import About from "./components/About";
import TopHeader from "./components/TopHeader";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="body-component">
        <div className="navbar">
        <TopHeader />
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component = {About} />
          </Switch>
        </div>
      </Router>
      );
  }
}

export default App;