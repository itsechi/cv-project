import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { Educational } from "./Educational";
import { Practical } from "./Practical";
import React, { Component } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export class Form extends Component {
  takeScreenshot = (e) => {
    e.preventDefault();
    htmlToImage
      .toPng(document.getElementById("preview"))
      .then(function (dataUrl) {
        download(dataUrl, "CV-preview.png");
      });
  };

  render() {
    return (
      <form autoComplete="off">
        <Personal
          state={this.props.state}
          handleChange={this.props.handlePersonalChange}
        />
        <Contact
          state={this.props.state}
          handleChange={this.props.handleContactChange}
        />
        <Educational
          state={this.props.state}
          handleChange={this.props.handleEducationalChange}
          addInputs={this.props.addEducationalInputs}
          removeInputs={this.props.removeEducationalInputs}
        />
        <Practical
          state={this.props.state}
          handleChange={this.props.handlePracticalChange}
          addInputs={this.props.addPracticalInputs}
          removeInputs={this.props.removePracticalInputs}
        />
        <button className="btn btn" onClick={this.props.loadExample}>Load example</button>
        <button className="btn btn--blue" onClick={this.takeScreenshot}>Export</button>
      </form>
    );
  }
}
