import React, { Component } from "react";

export class Personal extends Component {
  render() {
    return (
      <fieldset>
        <legend>Personal information</legend>
        <label>
          First name <input type="text"></input>
        </label>
        <label>
          Last name <input type="text"></input>
        </label>
        <label>
          Title <input type="text"></input>
        </label>
        <label>
          Description <textarea></textarea>
        </label>
      </fieldset>
    );
  }
}
