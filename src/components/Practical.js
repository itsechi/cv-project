import React, { Component } from "react";

export class Practical extends Component {
  render() {
    return (
      <section>
        <h2>Practical experience</h2>
        <label>
          Company name <input type="text"></input>
        </label>
        <label>
          Position title <input type="text"></input>
        </label>
        <label>
          Main tasks <input type="text"></input>
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
