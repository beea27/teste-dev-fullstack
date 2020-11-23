import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
</style>

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dancing Script', cursive;
  }
  :root {
      font-size: ${px2vw(24)};
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }
      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;