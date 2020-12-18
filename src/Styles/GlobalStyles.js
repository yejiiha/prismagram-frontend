import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${(prop) => prop.theme.bgColor};
        color: ${(prop) => prop.theme.blackColor};
    }
    a{
        color: ${(prop) => prop.theme.blueColor};
        text-decoration: none;
    }
`;
