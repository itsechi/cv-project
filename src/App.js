import React, { Component } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import "./sass/main.scss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        title: "",
        description: "",
      },
      contact: {
        phoneNumber: "",
        email: "",
        address: "",
      },
      education: [
        {
          index: 0,
          degree: "",
          schoolName: "",
          schoolLocation: "",
          schoolStartYear: "",
          schoolEndYear: "",
        },
      ],
      practical: [
        {
          index: 0,
          job: "",
          company: "",
          location: "",
          from: "",
          to: "",
          tasks: "",
        },
      ],
    };
  }

  handlePersonalChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        personal: { ...prevState.personal, [e.target.name]: e.target.value },
      };
    });
  };

  handleContactChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contact: { ...prevState.contact, [e.target.name]: e.target.value },
      };
    });
  };

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
          degree: "",
          schoolName: "",
          schoolLocation: "",
          schoolStartYear: "",
          schoolEndYear: "",
        },
      ],
    }));
  };

  removeEducationalInputs = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const index = +e.target.closest("div").dataset.id;
      const newItems = this.state.education.filter(
        (item) => item.index !== index
      );
      return {
        ...prevState,
        education: [...newItems],
      };
    });
  };

  handlePracticalChange = (e) => {
    this.setState((prevState) => {
      const index = +e.target.closest("div").dataset.id;
      const newItems = this.state.practical.map((item) => {
        if (item.index === index) {
          return { ...item, [e.target.name]: e.target.value };
        } else return item;
      });
      return {
        ...prevState,
        practical: [...newItems],
      };
    });
  };

  addPracticalInputs = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      practical: [
        ...prevState.practical,
        {
          index: this.state.practical.length,
          job: "",
          company: "",
          location: "",
          from: "",
          to: "",
          tasks: "",
        },
      ],
    }));
  };

  removePracticalInputs = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const index = +e.target.closest("div").dataset.id;
      const newItems = this.state.practical.filter(
        (item) => item.index !== index
      );
      return {
        ...prevState,
        practical: [...newItems],
      };
    });
  };

  render() {
    return (
      <main>
        <Form
          state={this.state}
          handleEducationalChange={this.handleEducationalChange}
          addEducationalInputs={this.addEducationalInputs}
          removeEducationalInputs={this.removeEducationalInputs}
          handlePersonalChange={this.handlePersonalChange}
          handleContactChange={this.handleContactChange}
          handlePracticalChange={this.handlePracticalChange}
          addPracticalInputs={this.addPracticalInputs}
          removePracticalInputs={this.removePracticalInputs}
        />
        <Preview state={this.state} />
      </main>
    );
  }
}
