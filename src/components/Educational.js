import React, { Component } from "react";

export class Educational extends Component {
  dik() {
    console.log(this.props);
  }

  render() {
    return (
      <fieldset>
        <legend>Educational experience</legend>
        <label>
          Degree{" "}
          <input
            type="text"
            id="degree"
            onChange={this.props.handleChange}
          ></input>
        </label>
        <label>
          School name{" "}
          <input
            type="text"
            id="schoolName"
            onChange={this.props.handleChange}
          ></input>
        </label>
        <label>
          City{" "}
          <input
            type="text"
            id="schoolLocation"
            onChange={this.props.handleChange}
          ></input>
        </label>
        <label>
          From{" "}
          <input
            type="number"
            min="1900"
            max="2099"
            id="schoolStartYear"
            onChange={this.props.handleChange}
          ></input>
        </label>
        <label>
          To{" "}
          <input
            type="number"
            min="1900"
            max="2099"
            id="schoolEndYear"
            onChange={this.props.handleChange}
          ></input>
        </label>
        <button className="btn" onClick={this.setEducation}>
          Add
        </button>
      </fieldset>
    );
  }
}
