import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0em 4em 0em;
    gap: 2em;
    max-width: 1400px;
    margin: 0 auto;
  } 
`

export const StickyContainer = styled.div`
  position: sticky;
  top: 60vh;
  height: 20vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`

export const Header = styled.header``;

export const Footer = styled.footer`
  width: 100%;
  height: 35px;
  margin: 0em 0em 0em 1.6em;

  ul {
    height: inherit;
    display: flex;
    gap: 1em;
    list-style: none;

    li {
      cursor: pointer;
    }

    img {
      height: 100%;
    }
  }
`;

export const Main = styled.main` 
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const HeadShotContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-40%);
  width: 1100px;
  height: 50vh;
  z-index: 10;
  border: 1px solid;
  transform-origin: center;
`

export const HeadShotImage = styled.img`
  height: 320px;
  padding: 1.6em;
  position: relative;
  left: 0%;
  transform: translate(10%, 10%);
`

export const HeadShotSpeech = styled.p`
  width: 350px;
  height: 60%;
  //background: red;
  position: absolute;
  left: 300px;
  top: 75px;
`

export const SectionListContainer = styled.section`
  width: 100%;
  position: relative;
  z-index: 20;

  ul {
    list-style: none;
    margin: 0em 0em 0em 1.6em;

    li {
      cursor: pointer;
      line-height: 2.2rem;
      text-transform: uppercase;
    }
  }
`

export const ListMarker = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.2rem;
  position: absolute;
`

interface SectionContainerSyled {
  $minheight?: number,
  $justify?: "start" | "center"
}

export const SectionContainer = styled.div<SectionContainerSyled>`
  min-height: ${({$minheight}) => $minheight ? `${$minheight}` : 50 }vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({$justify}) => $justify ? `${$justify}` : "start" };
`

export const SectionTitle = styled.h4`
  font-size: 2rem;
  text-transform: capitalize;
  min-height: 48px;
`

export const SectionContentContainer = styled.div`
  padding: 0em 1em;
`

export const SectionContent = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  padding: 1em 0em;
  margin: 0em 0em 2em;
`
interface SectionContentAsideStyled {
  $highlight: boolean
}
export const SectionContentAside = styled.div<SectionContentAsideStyled>`
  flex: 1;
  opacity: 0.6;
  height:28px;
  text-align: right;
  position: relative;
  padding-right: 1em;
  background-color: ${($highlight) => $highlight ? '#dde4ee' : '#dde4ee00'};
`

export const SectionContentMain = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

export const SectionContentMainTitle = styled.h4`
  font-size: 1.2rem;
`

export const SectionContentMainInfo = styled.div`

  img {
    width: 100%;
    border-radius: 0.4em;
  }
`

export const SectionContentStack = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    gap: 1em;

    li {
      padding: 0.4em 0.6em;
      border: 1px solid;
      border-radius: 0.6em;
    }
  }
`

export const AboutMe = styled.div`
  line-height: 2em;
  font-size: 1.2em;

  p {
    margin-bottom: 1em;
  }
`

export const SectionContentFormContainer = styled.div`

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 1em;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      
      p:last-of-type {
        font-style: italic;
      }

    }

    div:last-of-type {
      flex: unset;
      width: 100%;
    }

    button {
      width: 40%;
      position: relative;
      right: 0%;
    }

  }
  
`