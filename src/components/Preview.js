import React, { Component } from "react";

export function Preview(props) {
    return (
      <section className="preview" id="preview">
        <div className="preview__header">
          <h1>
            {props.personal.firstName}{" "}
            {props.personal.lastName}
          </h1>
          <h3>{props.personal.title}</h3>
          <p>{props.personal.description}</p>
        </div>

        <div className="preview__main">
          <div className="preview__section">
            <h3>Contact</h3>
            <div className="preview__contact">
              <span className="material-icons">phone</span>
              <p>Phone</p>
              <p className="preview__user-info">
                {props.contact.phoneNumber}
              </p>
            </div>
            <div className="preview__contact">
              <span className="material-icons">email</span>
              <p>Email</p>
              <p className="preview__user-info">
                {props.contact.email}
              </p>
            </div>
            <div className="preview__contact">
              <span className="material-icons">home</span>
              <p>Address</p>
              <p className="preview__user-info">
                {props.contact.address}
              </p>
            </div>
          </div>

          <div className="preview__section">
            <h3>Education</h3>
            {props.education.map((item, i) => {
              return (
                <div className="preview__education" key={i}>
                  <p>{item.degree}</p>
                  <p>
                    {item.schoolName}, {item.schoolLocation}
                  </p>
                  <p>
                    {item.schoolStartYear} - {item.schoolEndYear}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="preview__section">
            <h3>Experience</h3>
            {props.practical.map((item, i) => {
              return (
                <div className="preview__experience" key={i}>
                  <div className="preview__experience--left">
                    <p>
                      {item.from} - {item.to}
                    </p>
                    <p>{item.location}</p>
                  </div>
                  <div className="preview__experience--right">
                    <p> {item.job}</p>
                    <p> {item.company}</p>
                    <p>{item.tasks}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}
