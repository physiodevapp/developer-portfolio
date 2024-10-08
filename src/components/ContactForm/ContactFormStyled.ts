import styled from "styled-components";

interface ContactFormStyled {
  isDarkMode: boolean
}

export const ContactForm = styled.form<ContactFormStyled>`
  @media only screen and (max-width: 1000px) {
    align-items: center;
    justify-content: space-between !important;
  }

  input, textarea, button {
    border: ${({isDarkMode}) => `${!isDarkMode ? 1: 0}px solid #bcbcbc`};
  }
`

export const Field = styled.div`
  span {
    font-style: italic;
    color: #ffa500;
    text-align: right;
    padding-right: 1em;
  }
`

export const TextInput = styled.input`
  padding: 0.6em;
  border-radius: 0.4em;
  outline: none;
  border: none;
  font-size: 1.2rem;
`

export const TextArea = styled(TextInput).attrs({as: 'textarea'})``;

export const SocialMedia = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2em;
  margin-top: 0.2em;

  li {
    line-height: 0;
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`

export const SubmitButton = styled.button`
  padding: 0.6em 1em;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.4em;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 0.2em;

  svg {
    margin-right: 0.4em;
  }

  @media only screen and (max-width: 1000px) { 
    padding: 1em 0em;
    width: 50% !important;    
  }
`