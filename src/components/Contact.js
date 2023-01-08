import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <fieldset>
        <legend>Contact</legend>
        <label>
          Phone number <input type="tel"></input>
        </label>
        <label>
          Email <input type="email"></input>
        </label>
        <label>
          Address <input type="text"></input>
        </label>
      </fieldset>
    );
  }
}
