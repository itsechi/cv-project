import React, { Component } from "react";
import { Educational } from "./components/Educational";
import { General } from "./components/General";
import { Practical } from "./components/Practical";
import { Preview } from "./components/Preview";

export class App extends Component {
  render() {
    return (
      <main>
        <General />
        <Educational />
        <button>Add</button>
        <Practical />
        <button>Add</button>
        <Preview />
      </main>
    );
  }
}
