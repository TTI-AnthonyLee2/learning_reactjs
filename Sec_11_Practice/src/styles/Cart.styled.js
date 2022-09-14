import styled from 'styled-components';

export const StyledCartActions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    
    &:hover,
    &:active {
      background-color: #5a1a01;
      border-color: #5a1a01;
      color: white;
    }
  }

  button:nth-of-type(1) {
    color: #8a2b06;
  }

  button:nth-of-type(2) {
    background-color: #8a2b06;
    color: white;
  }
`;

export const StyledCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const StyledCartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;