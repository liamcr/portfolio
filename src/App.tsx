import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/page-not-found">
          <div>Page not found!</div>
        </Route>
        <Redirect from="*" to="/page-not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
