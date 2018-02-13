import React from "react";
import Button from "./Button";
import { Link } from "react-router";

class App extends React.Component {
  handleSelection() {
    console.log;
  }

  render() {
    return (
      <div className="menu">
        <Link className="btn btn-menu" to="/host">
          HOST
        </Link>
        <Link className="btn btn-menu" to="/play">
          PLAY
        </Link>
        <Link className="btn btn-menu" to="/view">
          VIEW
        </Link>
      </div>
    );
  }
}

export default App;
