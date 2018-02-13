import React from "react";
import sampleQuestions from "../samples.js";

class Host extends React.Component {
  constructor(){
    super();

    this.loadSamples = this.loadSamples.bind(this);

    this.state ={
      game : {
        host: "",
        questions: []
      } 
    }
  }

  loadSamples() {
    var game = this.state.game;

    game.questions = sampleQuestions;
    this.setState({game});
    
  }

  render() {
    return (
      <div>
        <h1>Host</h1>;
        <button onClick={this.loadSamples} />;
      </div>
  }
}

export default Host;
