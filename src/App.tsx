import React from "react";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:id">
          <Project />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
