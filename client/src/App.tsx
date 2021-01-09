import { Route, Switch } from "react-router-dom";
import React from "react";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <img
        src="https://images.unsplash.com/photo-1607893240314-91143f82a0ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        alt=""
      />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/:code/stats" component={Stats} />
      </Switch>
    </div>
  );
};

export default App;
