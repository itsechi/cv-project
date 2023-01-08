import React, { Component } from "react";

export class Educational extends Component {
  render() {
    return (
      <fieldset>
        <legend>Educational experience</legend>
        <label>
          Degree <input type="text"></input>
        </label>
        <label>
          School name <input type="text"></input>
        </label>
        <label>
          City <input type="text"></input>
        </label>
        <label>
          From <input type="date"></input>
        </label>
        <label>
          To <input type="date"></input>
        </label>
      </fieldset>
    );
  }
}
