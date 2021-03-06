import { css } from "frontity";
export default css`
  body {
    margin: 0;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  img,
  iframe {
    max-width: 100%;
  }
  *:focus {
    outline-style: dashed;
    outline-width: 1px;
    outline-color: #ddd;
  }
`;
