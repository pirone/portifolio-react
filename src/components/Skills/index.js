/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Container } from "./styles";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="skills">
            <div className="content">
              <div id="buttonsSkills">
                <button>Analista de Testes</button>
                <button>Desenvolvedor</button>
              </div>
              <div className="skillsat">
                <img alt="Jira" src={require("./img/jira.png")} />
                <img alt="Cucumber" src={require("./img/cucumber.png")} />
                <img alt="Mantis" src={require("./img/mantis.jpg")} />
                <img alt="Testlink" src={require("./img/testlink.png")} />
                <img alt="Scrum" src={require("./img/scrum.png")} />
                <img alt="Ruby" src={require("./img/ruby.png")} />
                <img alt="Selenium" src={require("./img/selenium.jpg")} />
                <img
                  alt="Quality Center"
                  src={require("./img/qualitycenter.png")}
                />
                <img alt="Sikuli" src={require("./img/sikuli.png")} />
                <img alt="Java" src={require("./img/java.jpg")} />
              </div>
            </div>
            <div className="foto">
              <img
                alt="Eu"
                src="https://banner2.kisspng.com/20180812/sta/kisspng-study-skills-learning-company-education-contedo-caf-com-galo-5b6fdd802e1da4.2384920515340578561889.jpg"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
