import React, { Component } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import "./styles.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          index: 0,
          degree: "Degree here",
          schoolName: "University",
          schoolLocation: "Location",
          schoolStartYear: 2012,
          schoolEndYear: 2016,
        },
      ],
    };
  }

  handleEducationalChange = (e) => {
    this.setState((prevState) => {
      const index = +e.target.closest("div").dataset.id;
      const newItems = this.state.education.map((item) => {
        if (item.index === index) {
          return { ...item, [e.target.name]: e.target.value };
        } else return item;
      });

      return {
        ...prevState,
        education: [...newItems],
      };
    });
  };

  addEducationalInputs = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          index: this.state.education.length,
          degree: "Degree here",
          schoolName: "University",
          schoolLocation: "Location",
          schoolStartYear: 2012,
          schoolEndYear: 2016,
        },
      ],
    }));
  };

  render() {
    return (
      <main>
        <Form
          state={this.state}
          handleChange={this.handleEducationalChange}
          addInputs={this.addEducationalInputs}
        />
        <Preview state={this.state} />
      </main>
    );
  }
}
