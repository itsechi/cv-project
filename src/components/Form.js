import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { Educational } from "./Educational";
import { Practical } from "./Practical";
import React, { Component } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export function Form(props) {
  const takeScreenshot = (e) => {
    e.preventDefault();
    htmlToImage
      .toPng(document.getElementById("preview"))
      .then(function (dataUrl) {
        download(dataUrl, "CV-preview.png");
      });
  };

  
    return (
      <form autoComplete="off">
        <Personal
          personal={props.personal}
          handleChange={props.handlePersonalChange}
        />
        <Contact
          contact={props.contact}
          handleChange={props.handleContactChange}
        />
        <Educational
          education={props.education}
          handleChange={props.handleEducationalChange}
          addInputs={props.addEducationalInputs}
          removeInputs={props.removeEducationalInputs}
        />
        <Practical
          practical={props.practical}
          handleChange={props.handlePracticalChange}
          addInputs={props.addPracticalInputs}
          removeInputs={props.removePracticalInputs}
        />
        <button className="btn btn" onClick={props.loadExample}>Load example</button>
        <button className="btn btn--blue" onClick={takeScreenshot}>Export</button>
      </form>
    );
  
}
