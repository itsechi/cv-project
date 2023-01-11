import React, { Component } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import "./styles.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        degree: "Degree here",
        schoolName: "University",
        schoolLocation: "Location",
        schoolStartYear: 2012,
        schoolEndYear: 2016,
      },
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      education: { ...prevState.education, [e.target.id]: e.target.value },
    }));

    console.log(e.target.value);
    console.log(this.state);
  };

  render() {
    return (
      <main>
        <Form state={this.state} handleChange={this.handleChange} />
        <Preview state={this.state} />
      </main>
    );
  }
}
