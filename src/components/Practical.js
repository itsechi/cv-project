import React, { Component } from "react";

export function Practical(props) {
    return (
      <fieldset>
        <legend>Practical experience</legend>

        {props.practical.map((item, i) => {
          const index = item.index;
          return (
            <div data-id={index} key={i}>
              <label>
                Job title{" "}
                <input
                  type="text"
                  name="job"
                  onChange={props.handleChange}
                  value={item.job}
                ></input>
              </label>
              <label>
                Company name{" "}
                <input
                  type="text"
                  name="company"
                  onChange={props.handleChange}
                  value={item.company}
                ></input>
              </label>
              <label>
                Location{" "}
                <input
                  type="text"
                  name="location"
                  onChange={props.handleChange}
                  value={item.location}
                ></input>
              </label>
              <label>
                From{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="from"
                  onChange={props.handleChange}
                  value={item.from}
                ></input>
              </label>
              <label>
                To{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="to"
                  onChange={props.handleChange}
                  value={item.to}
                ></input>
              </label>
              <label>
                Main tasks of the job{" "}
                <textarea
                  name="tasks"
                  onChange={props.handleChange}
                  value={item.tasks}
                ></textarea>
              </label>
              <button className="btn" onClick={props.removeInputs}>
                Delete
              </button>
            </div>
          );
        })}

        <button className="btn" onClick={props.addInputs}>
          Add
        </button>
      </fieldset>
    );
}
