/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component, Fragment } from "react";

import Sobre from "../../components/Sobre";
import Skills from "../../components/Skills";
import Header from "../../components/Header";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Sobre />
        <Skills />
      </Fragment>
    );
  }
}
