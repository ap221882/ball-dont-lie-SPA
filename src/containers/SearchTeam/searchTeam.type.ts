import styled from 'styled-components';

export const StyledAdvancedSearch = styled.form`
  height: 4.5rem;
  input[type='text'] {
    background-color: #e2e8f0;
    border: none;
    color: #334155;
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    font-size: 2rem;
  }
  input::placeholder {
    color: #334155;
    font-size: 2rem;
  }
  input:focus {
    outline: none;
  }
  .search__bar {
    display: flex;
    align-items: center;
    min-height: 4.5rem;
    background-color: #e2e8f0;
    padding: 12px;
    justify-self: center;
    margin-right: 3rem;
    border-radius: 10px;
  }
  .search__icon__container {
    padding: 0 4px;
    display: grid;
    place-items: center;
  }
`;
