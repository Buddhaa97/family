import { createGlobalStyle } from 'styled-components';
import { Theme } from '../models/theme.models';

export const GlobalStyles = createGlobalStyle<Theme>`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        letter-spacing: .6px;
        p {
            color: ${({ theme }) => theme.text};
        }
    }
`;