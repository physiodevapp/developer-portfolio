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

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Main = styled.main` 
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const HeadShotContainer = styled.figure`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
  height: 30vh;
  background: red;
  z-index: 10;
`

export const HeadShotImage = styled.img`
  height: 100%;
`

export const SectionListContainer = styled.section`
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;

  ul {
    list-style: none;
    margin: 0em 0em 0em 1.6em;

    li {
      cursor: pointer;
      line-height: 2.2rem;
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
  $minheight?: number
}

export const SectionContainer = styled.div<SectionContainerSyled>`
  min-height: ${({$minheight}) => $minheight ? `${$minheight}` : 30 }vh;
  width: 100%;
`

export const SectionTitle = styled.h4`
  font-size: 2rem;
  text-transform: capitalize;
  min-height: 48px;
`

export const SectionContentContainer = styled.div`

`

export const SectionContent = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  padding: 1em 0em;
  margin: 0em 0em 2em;
`

export const SectionContentAside = styled.div`
  flex: 0.8;
  opacity: 0.6;
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

export const AboutMe = styled.p`
  line-height: 2em;
  font-size: 1.2em;
`