import styled from "styled-components";

interface SectionContainerSyled {
  $minheight?: number
}

export const SectionContainer = styled.div<SectionContainerSyled>`
  height: ${({$minheight}) => $minheight ? `${$minheight}` : 30 }vh;

`

export const SectionTitle = styled.h4`
  background-color: red;
`