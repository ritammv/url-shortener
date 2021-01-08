import { Route, Switch } from "react-router-dom";
import React from "react";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/:code/stats" component={Stats} />
      </Switch>
    </div>
  );
};

export default App;
