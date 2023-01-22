import React, { Component } from "react";

export function Educational(props) {
    return (
      <fieldset>
        <legend>Educational experience</legend>

        {props.education.map((item, i) => {
          const index = item.index;
          return (
            <div data-id={index} key={i}>
              <label>
                Degree{" "}
                <input
                  type="text"
                  name="degree"
                  onChange={props.handleChange}
                  value={item.degree}
                ></input>
              </label>
              <label>
                School name{" "}
                <input
                  type="text"
                  name="schoolName"
                  onChange={props.handleChange}
                  value={item.schoolName}
                ></input>
              </label>
              <label>
                City{" "}
                <input
                  type="text"
                  name="schoolLocation"
                  onChange={props.handleChange}
                  value={item.schoolLocation}
                ></input>
              </label>
              <label>
                From{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="schoolStartYear"
                  onChange={props.handleChange}
                  value={item.schoolStartYear}
                ></input>
              </label>
              <label>
                To{" "}
                <input
                  type="number"
                  min="1900"
                  max="2099"
                  name="schoolEndYear"
                  onChange={props.handleChange}
                  value={item.schoolEndYear}
                ></input>
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
