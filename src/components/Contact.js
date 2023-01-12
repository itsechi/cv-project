import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <fieldset>
        <legend>Contact</legend>
        <label>
          Phone number{" "}
          <input
            type="tel"
            name="phoneNumber"
            onChange={this.props.handleChange}
            value={this.props.state.contact.phoneNumber}
          ></input>
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            onChange={this.props.handleChange}
            value={this.props.state.contact.email}
          ></input>
        </label>
        <label>
          Address{" "}
          <input
            type="text"
            name="address"
            onChange={this.props.handleChange}
            value={this.props.state.contact.address}
          ></input>
        </label>
      </fieldset>
    );
  }
}
