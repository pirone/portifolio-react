import { createGlobalStyle } from "styled-components";
import FiraCode from "../assets/FiraCode.ttf";

import "font-awesome/css/font-awesome.css";

const globalStyle = createGlobalStyle`

  @font-face {
    font-family: "FiraCode";
    src: url(${FiraCode});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    vertical-align:top;
  }

  body {
    background: #a00;
    text-rendering: optimizeLegibility !important;
    --webkit-font-smoothing: atialiased !important;

    font-family: FiraCode;
  }

  .content {
    margin: 0 400px;
  }

  ul {
    list-style: none;
  }

  a {
    color: #0060B6;
    text-decoration: none;

    &hover {
      color:#00A0C6;
      text-decoration:none;
      cursor:pointer;
    }
  }
  hr {
      width: 25%;
      border-top: 1px solid;
      border-color: #FFF;
      margin: 8px 3px;
    }
`;

export default globalStyle;
