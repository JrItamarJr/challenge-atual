import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }
    button{
        cursor: pointer;
    }

    *, button, input{
    border: 0;
    outline: 0;
    font-family: 'Century Gothic','Roboto', sans-serif;
    color: #5D5D6D;
    }
`;