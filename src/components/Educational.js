import React, { Component } from "react";

export class Educational extends Component {
  render() {
    return (
      <fieldset>
        <legend>Educational experience</legend>

        {this.props.state.education.map((item) => {
          const index = item.index;
          return (
            <div data-id={index}>
              <label>
                Degree{" "}
                <input
                  type="text"
                  name="degree"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                School name{" "}
                <input
                  type="text"
                  name="schoolName"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                City{" "}
                <input
                  type="text"
                  name="schoolLocation"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                From{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="schoolStartYear"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                To{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="schoolEndYear"
                  onChange={this.props.handleChange}
                ></input>
              </label>
            </div>
          );
        })}

        <button className="btn" onClick={this.props.addInputs}>
          Add
        </button>
      </fieldset>
    );
  }
}
