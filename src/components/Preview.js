import React, { Component } from "react";

export class Preview extends Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__header">
          <h1>
            {this.props.state.personal.firstName}{" "}
            {this.props.state.personal.lastName}
          </h1>
          <h3>{this.props.state.personal.title}</h3>
          <p>{this.props.state.personal.description}</p>
        </div>

        <div className="preview__main">
          <div className="preview__section">
            <h3>Contact</h3>
            <div className="preview__contact">
              <span className="material-icons">phone</span>
              <p>Phone</p>
              <p className="preview__user-info">{this.props.state.contact.phoneNumber}</p>
            </div>
            <div className="preview__contact">
              <span className="material-icons">email</span>
              <p>Email</p>
              <p className="preview__user-info">{this.props.state.contact.email}</p>
            </div>
            <div className="preview__contact">
              <span className="material-icons">home</span>
              <p>Address</p>
              <p className="preview__user-info">
              {this.props.state.contact.address}
              </p>
            </div>
          </div>

          <div className="preview__section">
            <h3>Education</h3>
            {this.props.state.education.map((item) => {
              return (
                <div className="preview__education">
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
            <div className="preview__experience">
              <div className="preview__experience--left">
                <p>2012 - 2016</p>
                <p>New York, USA</p>
              </div>
              <div className="preview__experience--right">
                <p>Job title here</p>
                <p>Company name</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo.
                </p>
              </div>
            </div>
            <div className="preview__experience">
              <div className="preview__experience--left">
                <p>2012 - 2016</p>
                <p>New York, USA</p>
              </div>
              <div className="preview__experience--right">
                <p>Job title here</p>
                <p>Company name</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
