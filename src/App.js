import React, { Component } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import './styles.scss';

export class App extends Component {
  render() {
    return (
      <main>
        <Form />
        <Preview />
      </main>
    );
  }
}
