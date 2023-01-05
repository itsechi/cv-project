import React, { Component } from "react";

export class Educational extends Component {
  render() {
    return (
      <section>
        <h2>Educational experience</h2>
        <label>
          School name <input type="text"></input>
        </label>
        <label>
          City <input type="text"></input>
        </label>
        <label>
          Degree <input type="text"></input>
        </label>
        <label>
          From <input type="date"></input>
        </label>
        <label>
          To <input type="date"></input>
        </label>
      </section>
    );
  }
}
