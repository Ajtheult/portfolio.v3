import React from "react";

import { Home } from "./components/layout/pages/Home";
import { Skills } from "./components/layout/pages/Skills";
import { MyWork } from "./components/layout/pages/MyWork";
import { Testimonials } from "./components/layout/pages/Testimonials";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/portfolio-version-3" component={Home} />
          <Route path="skills" component={Skills} />
          <Route path="mywork" component={MyWork} />
          <Route path="testimonials" component={Testimonials} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
