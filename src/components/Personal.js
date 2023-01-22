import React from "react";

export function Personal(props) {
  return (
    <fieldset>
      <legend>Personal information</legend>
      <label>
        First name{" "}
        <input
          type="text"
          name="firstName"
          onChange={props.handleChange}
          value={props.personal.firstName}
        ></input>
      </label>
      <label>
        Last name{" "}
        <input
          type="text"
          name="lastName"
          onChange={props.handleChange}
          value={props.personal.lastName}
        ></input>
      </label>
      <label>
        Title{" "}
        <input
          type="text"
          name="title"
          onChange={props.handleChange}
          value={props.personal.title}
        ></input>
      </label>
      <label>
        Description{" "}
        <textarea
          name="description"
          onChange={props.handleChange}
          value={props.personal.description}
        ></textarea>
      </label>
    </fieldset>
  );
}
