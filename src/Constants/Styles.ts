import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        margin: 0;
        font-family: Arial, sans-serif;
        transition: background-color 0.3s, color 0.3s; // Smooth transitions
    }
`;

export const lightTheme = {
  background: "#ffffff",
  color: "#000000",
  // Add more properties as needed
};

export const darkTheme = {
  background: "#242424",
  color: "#ffffff",
  // Add more properties as needed
};

export default GlobalStyle;
