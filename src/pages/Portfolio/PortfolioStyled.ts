import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  } 
`

export const Header = styled.header`
  background-color: #799bcf;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Main = styled.main` 
  overflow-y: auto;
  width: 100%;
`

export const HeadShot = styled.figure`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
  height: 30vh;
  background: red;
  z-index: 10;
`