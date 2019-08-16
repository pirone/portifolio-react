/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { Container } from "./styles";

export default class Sobre extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="sobre">
            <div className="descricao">
              <h1>Sobre mim</h1>
              <hr />
              <p>
                {" "}
                Euismod integer est urna libero auctor scelerisque, mauris
                euismod molestie habitasse varius aliquet nec, molestie placerat
                etiam in arcu. ac lobortis maecenas tincidunt tristique torquent
                dictum aliquam bibendum elementum phasellus dapibus, praesent
                per dapibus donec metus mattis lobortis bibendum eu tempor, eros
                et laoreet massa turpis senectus turpis gravida aenean justo.
                pretium potenti varius quam bibendum odio a aliquam luctus
                senectus placerat dui placerat nibh, suspendisse eu risus ad sit
                vivamus aenean consectetur sem luctus magna fringilla. id magna
                metus vulputate vestibulum vehicula amet facilisis in, bibendum
                aptent habitant augue nostra malesuada ut, scelerisque arcu
                tincidunt aenean justo pharetra quisque.{" "}
              </p>
              <div id="redesSociais">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pedro-henrique-pereira-495ba9aa"
                      className="fa fa-linkedin-square"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pirone.ph/"
                      className="fa fa-instagram"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/pedrohenriquedf"
                      className="fa fa-facebook-square"
                      target="_blank"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
