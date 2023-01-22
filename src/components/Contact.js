import React, { Component } from "react";

export function Contact(props) {
    return (
      <fieldset>
        <legend>Contact</legend>
        <label>
          Phone number{" "}
          <input
            type="tel"
            name="phoneNumber"
            onChange={props.handleChange}
            value={props.contact.phoneNumber}
          ></input>
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            value={props.contact.email}
          ></input>
        </label>
        <label>
          Address{" "}
          <input
            type="text"
            name="address"
            onChange={props.handleChange}
            value={props.contact.address}
          ></input>
        </label>
      </fieldset>
    );
}
