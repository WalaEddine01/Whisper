import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Error = styled.p`
  color: var(--errorColor);
  margin-top: 4px;
`;

export const Submit = styled.input`
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--inputColor);
  color: var(--mainTextColor);

  &:focus {
    box-shadow: 0px 0px 10px 0px #00000044;
  }

  &::placeholder {
    color: var(--mainTextColorLight); /* Placeholder text color */
    font-style: italic; /* Placeholder text style */
  }
`;

export const InputDiv = styled.div``;

