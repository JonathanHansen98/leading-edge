import React from "react";
import "./App.css";
import TopBar from "./Components/Nav";
import Home from "./Components/pages/Home/Home";
import Contact from "./Components/pages/Contact/Contact";
import Services from "./Components/pages/Services/Services";
import WaterMark from "./Components/Watermark";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <WaterMark />
        <TopBar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Switch>
        <Route path="/services" component={Services} exact />
      </Switch>
      <Switch>
        <Route path="/contact" component={Contact} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
