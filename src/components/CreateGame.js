import React from "react";

class CreateGame extends React.Component {
  createGame(e) {
    e.preventDefault();
    console.log("Create new game!");
  }

  render() {
    return (
      <form className="createGame" onSubmit={this.createGame}>
        <h2>Create new game:</h2>
        <input type="text" placeholder="" />
      </form>
    );
  }
}

export default CreateGame;
