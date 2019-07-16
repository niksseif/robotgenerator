import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormFeild from "./components/Formfeild";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FormFeild} />
        </Switch>
      </BrowserRouter>
      {/* </div> */}
    </div>
  );
}

export default App;
