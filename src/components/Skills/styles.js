import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  div {
    display: flex;
  }

  #skills {
    display: inline-block;
  }

  #buttonsSkills {
  }

  .skillsat {
    div {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      img {
        max-width: 200px;
        max-height: 100px;
        margin: 10px 2px;
      }
    }

    @media only screen and (min-width: 768px) {
      #skills1 {
        margin-top: 50px;
        margin-right: 100px;
      }

      #skills2 {
        margin-right: 100px;
      }
    }

    #skills3 {
    }
  }

  button {
    border-radius: 2%;
    padding: 10px;
    font-weight: bold;
    background-color: #48cfaf;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 15px;
    border: 0;
    margin: 2px 2px;

    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .sobre {
    width: 100%;
    overflow: hidden;
  }

  .foto {
    max-width: 20%;
    min-width: 20%;
    margin: 1% 1%;
    float: right;

    img {
      border-radius: 50%;
      max-width: 100%;
      max-height: 100%;
      min-width: 50%;
    }
  }

  .content {
    max-width: 75%;
    margin-top: 3%;

    h1 {
      margin-bottom: 10px;
    }
  }
`;
