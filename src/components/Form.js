import { Personal } from "./Personal";
import { Contact } from "./Contact";
import { Educational } from "./Educational";
import { Practical } from "./Practical";
import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form>
        <Personal />
        <Contact />
        <Educational />
        <Practical />
      </form>
    );
  }
}
