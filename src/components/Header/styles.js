import styled from "styled-components";

import background from "./img/batman1.jpg";
import quicksand from "../../assets/Quicksand-Regular.otf";

export const Container = styled.div`
  @font-face {
    font-family: "Quicksand";
    src: url(${quicksand});
  }
  background-image: url(${background});
  padding: 0 40px;

  min-height: 650px;
  font-family: "Quicksand";

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #nome {
    font-family: Quicksand;
    color: #fff;
    font-size: 30px;
  }

  .cargo {
    color: #00b8e4;
    font-size: 20px;
  }

  .foto {
    max-width: 20%;
    margin: 1% 1%;

    img {
      border-radius: 50%;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
