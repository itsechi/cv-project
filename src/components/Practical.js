import React, { Component } from "react";

export class Practical extends Component {
  render() {
    return (
      <fieldset>
        <legend>Practical experience</legend>

        {this.props.state.practical.map((item) => {
          const index = item.index;
          return (
            <div data-id={index}>
              <label>
                Job title{" "}
                <input
                  type="text"
                  name="job"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                Company name{" "}
                <input
                  type="text"
                  name="company"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                Location{" "}
                <input
                  type="text"
                  name="location"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                From{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="from"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                To{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="to"
                  onChange={this.props.handleChange}
                ></input>
              </label>
              <label>
                Main tasks of the job{" "}
                <textarea
                  name="tasks"
                  onChange={this.props.handleChange}
                ></textarea>
              </label>
            </div>
          );
        })}
      </fieldset>
    );
  }
}
