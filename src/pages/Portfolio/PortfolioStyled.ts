import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  padding: 0;

  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0em 4em 0em;
    gap: 2em;
    max-width: 1500px;
    margin: 0 auto;
  } 
`

export const Header = styled.header`
  position: sticky;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  top: 0;
  height: 50vh;
  flex: 1;
  align-items: flex-end;

  @media only screen and (max-width: 1000px) {
    position: relative;
    padding: 0em 1em;
    min-height: 440px;
  }
`

export const Main = styled.main` 
  overflow-y: visible;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`

export const Profile = styled.section`
  width: 100%;
  top: 0;
  position: absolute;
  align-content: flex-end;
  padding: calc(50vh - 200px) 0em 0em;

  @media only screen and (max-width: 1000px) {
    padding: 6em 0em 0em !important;
    width: unset;
  }
`

export const Name = styled.p`
  font-weight: bold;
  font-size: 3.4rem;
  line-height: 100%;
  margin: 0 0 0.2em;
`

export const Position = styled.p`
  font-size: 2rem;
  margin: 0 0 0.6em;
  opacity: 1;
`

export const Maxim = styled.p`
  font-size: 2rem;
  font-style: italic;
`

export const MaximQuotes = styled.span`
  font-size: 3rem;
  display: inline-block;
  line-height: 4rem;
  vertical-align: middle;

  &::before {
    content: '"';
  }
`

export const Index = styled.section`
  position: absolute;
  top: 100%;

  ul {
    list-style: none;
    margin: 0em 0em 0em 1.6em;

    li {
      cursor: pointer;
      line-height: 2.2rem;
      text-transform: uppercase;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export const IndexMarker = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.2rem;
  position: absolute;
`

export const SocialMedia = styled.section`
  position: absolute;
  top: 140%;
  width: 100%;
  display: inline-flex;
  align-items: center;

  ul {
    height: inherit;
    display: flex;
    align-items: center;
    gap: 1em;
    list-style: none;
    transform: translateX(-235px);

    li {
      cursor: pointer;
      opacity: 0.6;
      line-height: 0;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.4);
        opacity: 1 !important;
      }
    }
  }

  span {
    opacity: 0;
    font-size: 1.4rem;
  }

  span:last-of-type {
    transform: translateX(20px);

    svg {
      margin-left: 0.2em;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
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
  gap: 1em;
  padding: calc(50vh - 200px) 0em 0em;

  @media only screen and (max-width: 1000px) {
    padding: 0;
    
    &.mobile:first-child {
      min-height: unset;
    }

    &.mobile:last-child {
      justify-content: center;
    }
  }
`

export const SectionTitle = styled.h4`
  font-size: 2rem;
  text-transform: capitalize;
  min-height: 48px;
  margin-bottom: 1em;

  @media only screen and (max-width: 1000px) {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(20px);
    padding: 0em 1rem;
  }

  @media only screen and (min-width: 1000px) {
    margin-bottom: 0em;

    &.mobile {
      display: none;
    }
  }
`

export const SectionContentContainer = styled.div`
  padding: 0em 1em;

  @media only screen and (max-width: 1000px) {
    padding: 0em;
  }
`

export const SectionContent = styled.section`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  padding: 0em 0em 1em;
  margin: 0em 0em 2em;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 0em 1em;
    margin: 0em 0em 4em;
  }
`

interface SectionContentAsideStyled {
  $imgSrc: string
}
export const SectionContentAside = styled.div<SectionContentAsideStyled>`
  flex: 1;
  text-align: right;
  position: relative;

  figure {
    width: 100%;
    height: 100px;
    background-size: cover;
    background-position: center;
    background-image: url(${({$imgSrc}) => $imgSrc});
    border-radius: 0.6em;

    img {
      display: none;
    }
  }

  @media only screen and (max-width: 1000px) {
    figure {
      height: 160px;
    }
  }

`

export const SectionContentMain = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

export const SectionContentMainTitle = styled.h4`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  svg {
    margin: 0em 0em 0em 0.6em;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.4);
    }
  }
`

export const SectionContentMainInfo = styled.div`
  line-height: 2em;

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
    flex-wrap: wrap;
    gap: 0.6em;
    list-style: none;

    li {
      padding: 0.4em 0.6em;
      border: 1px solid #00eaff;
      border-radius: 0.6em;
      color: #00eaff;
    }
  }
`

export const AboutMe = styled.div`
  line-height: 2em;
  font-size: 1.4rem;

  p {
    margin-bottom: 1em;
    padding: 0em 2em 0em 0em;
  }

  @media only screen and (max-width: 1000px) { 
    p {
      padding: 0em;
      font-size: 1.2rem;
    }
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