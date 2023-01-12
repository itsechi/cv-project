import React, { Component } from "react";

export class Personal extends Component {
  render() {
    return (
      <fieldset>
        <legend>Personal information</legend>
        <label>
          First name{" "}
          <input
            type="text"
            name="firstName"
            onChange={this.props.handleChange}
            value={this.props.state.personal.firstName}
          ></input>
        </label>
        <label>
          Last name{" "}
          <input
            type="text"
            name="lastName"
            onChange={this.props.handleChange}
            value={this.props.state.personal.lastName}
          ></input>
        </label>
        <label>
          Title{" "}
          <input
            type="text"
            name="title"
            onChange={this.props.handleChange}
            value={this.props.state.personal.title}
          ></input>
        </label>
        <label>
          Description{" "}
          <textarea
            name="description"
            onChange={this.props.handleChange}
            value={this.props.state.personal.description}
          ></textarea>
        </label>
      </fieldset>
    );
  }
}
