import styled from "styled-components";

export const Container = styled.div`
  padding: 0 40px;

  min-height: 650px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  .sobre {
    width: 100%;
    overflow: hidden;
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

  .descricao {
    max-width: 50%;
    margin-top: 3%;
    color: #fff;
    text-align: center;

    h1 {
      margin-bottom: 10px;
    }
  }

  #redesSociais {
    padding-top: 5%;
    font-size: 50px;
    vertical-align: bottom;

    li {
      display: inline;
      padding: 2px 2px;
      margin: 0 2px;
    }
  }
`;
