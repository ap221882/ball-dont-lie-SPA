import styled from 'styled-components';

export const StyledAdvancedSearch = styled.form`
  height: 4.5rem;
  width: 60rem;
  max-height: 4.5rem;
  input[type='text'] {
    padding: 0.5rem;
    background-color: #e2e8f0;
    border: none;
    color: #334155;
    padding: 0 4px;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  input::placeholder {
    color: #334155;
    font-size: 1rem;
  }
  input:focus {
    outline: none;
  }
`;
