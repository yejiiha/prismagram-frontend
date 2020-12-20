import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${(prop) => prop.theme.bgColor};
        color: ${(prop) => prop.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
    }

    a{
        color: ${(prop) => prop.theme.blueColor};
        text-decoration: none;
    }

    input:focus{
        outline:none;
    }
`;
