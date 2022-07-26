import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'NS-R';
    color: #000000;
    font-size: 15px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
/*    background-color: transparent;
    border: none;
    outline: none;*/
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'NS-B';
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
