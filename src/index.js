import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Match, Miss } from "react-router";
import NotFound from "./components/NotFound";
import Host from "./components/Host";
import Play from "./components/Play";
import View from "./components/View";

import "./css/styles.css";

import App from "./components/App";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/host" component={Host} />
        <Match exactly pattern="/play" component={Play} />
        <Match exactly pattern="/view" component={View} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector("#main"));
