/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Container } from "./styles";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="skills">
            <div className="skillsat">
              <div id="skills1">
                <img alt="Jira" src={require("./img/jira.png")} />
                <img alt="Cucumber" src={require("./img/cucumber.png")} />
                <img alt="Mantis" src={require("./img/mantis.jpg")} />
                <img alt="Testlink" src={require("./img/testlink.png")} />
              </div>
              <div id="skills2">
                <img alt="Scrum" src={require("./img/scrum.png")} />
                <img alt="Ruby" src={require("./img/ruby.png")} />
                <img alt="Selenium" src={require("./img/selenium.jpg")} />
              </div>
              <div id="skills3">
                <img
                  alt="Quality Center"
                  src={require("./img/qualitycenter.png")}
                />
                <img alt="Sikuli" src={require("./img/sikuli.png")} />
                <img alt="Java" src={require("./img/java.jpg")} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
