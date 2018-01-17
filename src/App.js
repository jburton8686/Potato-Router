import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Base from "./Base";
import About from "./About";
import Ideas from "./Ideas";


const App = () => (
  <BrowserRouter>
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Base</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ideas">Ideas</Link >
          </li>
        </ul>
      </div>
      <hr />
      <Route exact path="/" component={Base} />
      <Route path="/about" component={About} />
      <Route path="/ideas" component={Ideas} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
export default App;
