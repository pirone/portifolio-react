import React, { Component } from "react";
import { Container } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="header">
            <div className="foto">
              <img
                alt="Eu"
                src="https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/43739502_2957354434281045_8275447311241314304_n.jpg?_nc_cat=107&_nc_oc=AQkDmspP8Km1Fj2tJrf7TaUYILW7VbRYnoQuLKNHPdYTPkhfgnhs9g095tsI9yxyY-I&_nc_ht=scontent.fbsb8-2.fna&oh=dfef48b278aca2edfe8d540a34a0b3a0&oe=5DED31DD"
              />
            </div>
            <div id="nome">
              <h1>Pedro Henrique Silva Pereira</h1>
            </div>
            <hr />
            <div id="cargo1" className="cargo">
              <h1>Analista de Testes</h1>
            </div>
            <div id="cargo2" className="cargo">
              <h1>Desenvolvedor</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
