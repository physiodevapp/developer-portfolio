import styled from "styled-components";

export const Field = styled.div`
  p {
    color: #ffa500;
  }
`

export const TextInput = styled.input`
  padding: 1em;
  border-radius: 0.4em;
  outline: none;
  border: none;
`

export const TextArea = styled(TextInput).attrs({as: 'textarea'})``;

export const SubmitButton = styled.button`
  padding: 0.6em 1em;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.4em;
  outline: none;
  border: none;
  cursor: pointer;
`