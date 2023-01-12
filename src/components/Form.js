import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { Educational } from "./Educational";
import { Practical } from "./Practical";
import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form>
        <Personal state={this.props.state} handleChange={this.props.handlePersonalChange} />
        <Contact state={this.props.state} handleChange={this.props.handleContactChange} />
        <Educational
          state={this.props.state}
          handleChange={this.props.handleEducationalChange}
          addInputs={this.props.addEducationalInputs}
        />
        <Practical
          state={this.props.state}
          handleChange={this.props.handlePracticalChange}
          addInputs={this.props.addPracticalInputs}
          removeInputs={this.props.removePracticalInputs}
        />
      </form>
    );
  }
}
