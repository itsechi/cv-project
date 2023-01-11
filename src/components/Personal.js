import React, { Component } from "react";

export class Personal extends Component {
  render() {
    return (
      <fieldset>
        <legend>Personal information</legend>
        <label>
          First name <input type="text" name="firstName" onChange={this.props.handleChange}></input>
        </label>
        <label>
          Last name <input type="text" name="lastName" onChange={this.props.handleChange}></input>
        </label>
        <label>
          Title <input type="text" name="title" onChange={this.props.handleChange}></input>
        </label>
        <label>
          Description <textarea name="description" onChange={this.props.handleChange}></textarea>
        </label>
      </fieldset>
    );
  }
}
