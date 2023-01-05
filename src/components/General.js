import React, { Component } from "react";

export class General extends Component {
  render() {
    return (
      <section>
        <h2>General information</h2>
        <label>
          First name <input type="text"></input>
        </label>
        <label>
          Last name <input type="text"></input>
        </label>
        <label>
          Address <input type="text"></input>
        </label>
        <label>
          Email <input type="email"></input>
        </label>
        <label>
          Phone number <input type="tel"></input>
        </label>
      </section>
    );
  }
}
