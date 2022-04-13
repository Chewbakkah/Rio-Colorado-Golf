import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Directions from "./components/Directions";

import Home from "./pages/Home";
import Amenities from "./pages/Amenities";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/amenities" component={Amenities} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
