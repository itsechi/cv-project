import React, { Component } from "react";

export class Educational extends Component {
  render() {
    return (
      <fieldset>
        <legend>Educational experience</legend>

        {this.props.state.education.map((item) => {
          const index = item.index;
          return (
            <div id={index}>
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
