import React, { useState } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import "./sass/main.scss";
import { exampleCV } from "./exampleCV";
import { nanoid } from "nanoid";

export function App() {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    title: "",
    description: "",
  });

  const [contact, setContact] = useState({
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [education, setEducation] = useState([
    {
      index: nanoid(),
      degree: "",
      schoolName: "",
      schoolLocation: "",
      schoolStartYear: "",
      schoolEndYear: "",
    },
  ]);

  const [practical, setPractical] = useState([
    {
      index: nanoid(),
      job: "",
      company: "",
      location: "",
      from: "",
      to: "",
      tasks: "",
    },
  ]);

  const handlePersonalChange = (e) => {
    setPersonal((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleContactChange = (e) => {
    setContact((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleEducationalChange = (e) => {
    setEducation((prevState) => {
      const index = e.target.closest("div").dataset.id;
      const newItems = prevState.map((item) => {
        if (item.index === index) {
          return { ...item, [e.target.name]: e.target.value };
        } else return item;
      });
      return [...newItems];
    });
  };

  const addEducationalInputs = (e) => {
    e.preventDefault();
    setEducation((prevState) => {
      return [
        ...prevState,
        {
          index: nanoid(),
          degree: "",
          schoolName: "",
          schoolLocation: "",
          schoolStartYear: "",
          schoolEndYear: "",
        },
      ];
    });
  };

  const removeEducationalInputs = (e) => {
    e.preventDefault();
    setEducation((prevState) => {
      const index = e.target.closest("div").dataset.id;
      const newItems = prevState.filter((item) => item.index !== index);
      return [...newItems];
    });
  };

  const handlePracticalChange = (e) => {
    setPractical((prevState) => {
      const index = e.target.closest("div").dataset.id;
      const newItems = prevState.map((item) => {
        if (item.index === index) {
          return { ...item, [e.target.name]: e.target.value };
        } else return item;
      });
      return [...newItems];
    });
  };

  const addPracticalInputs = (e) => {
    e.preventDefault();
    setPractical((prevState) => {
      return [
        ...prevState,
        {
          index: nanoid(),
          job: "",
          company: "",
          location: "",
          from: "",
          to: "",
          tasks: "",
        },
      ];
    });
  };

  const removePracticalInputs = (e) => {
    e.preventDefault();
    setPractical((prevState) => {
      const index = e.target.closest("div").dataset.id;
      const newItems = prevState.filter((item) => item.index !== index);
      return [...newItems];
    });
  };

  // const loadExample = (e) => {
  //   e.preventDefault();
  //   this.setState(exampleCV);
  // };

  return (
    <main>
      <Form
        personal={personal}
        contact={contact}
        education={education}
        practical={practical}
        handleEducationalChange={handleEducationalChange}
        addEducationalInputs={addEducationalInputs}
        removeEducationalInputs={removeEducationalInputs}
        handlePersonalChange={handlePersonalChange}
        handleContactChange={handleContactChange}
        handlePracticalChange={handlePracticalChange}
        addPracticalInputs={addPracticalInputs}
        removePracticalInputs={removePracticalInputs}
        // loadExample={loadExample}
      />
      <Preview
        personal={personal}
        contact={contact}
        education={education}
        practical={practical}
      />
    </main>
  );
}
