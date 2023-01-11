import React, { Component } from "react";

export class Practical extends Component {
  render() {
    return (
      <fieldset>
        <legend>Practical experience</legend>
        <label>
          Job title <input type="text"></input>
        </label>
        <label>
          Company name <input type="text"></input>
        </label>
        <label>
          Location <input type="text"></input>
        </label>
        <label>
          From <input type="number" min="1900" max="2099"></input>
        </label>
        <label>
          To <input type="number" min="1900" max="2099"></input>
        </label>
        <label>
          Main tasks of the job <textarea></textarea>
        </label>
      </fieldset>
    );
  }
}
