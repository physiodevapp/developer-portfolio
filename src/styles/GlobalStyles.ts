import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

`

export interface Theme {
  body: string;
  text: string;
}

export const lightTheme: Theme = {
  body: '#ffffff',
  text: '#444452'
}

export const darkTheme: Theme = {
  body: '#0f172a',
  text: '#dde4ee'
}