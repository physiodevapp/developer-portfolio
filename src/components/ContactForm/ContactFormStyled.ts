import styled from "styled-components";

export const TextInput = styled.input`
  padding: 1em;
  border-radius: 0.4em;
  outline: none;
  border: none;
`

export const TextArea = styled(TextInput).attrs({as: 'textarea'})``;

export const SubmitButton = styled.button`
  padding: 1em;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.4em;
  outline: none;
  border: none;
  cursor: pointer;
`