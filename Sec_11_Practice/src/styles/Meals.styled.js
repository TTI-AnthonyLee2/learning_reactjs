import styled from 'styled-components';

export const StyledMealsSummary = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`;

export const StyledAvailableMeals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const StyledMealItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }

  div:first-of-type {
    div:first-of-type {
      font-style: italic;
    }
    
    div:last-of-type {
      margin-top: 0.25rem;
      font-weight: bold;
      color: #ad5502;
      font-size: 1.25rem;
    }
  }
`;

export const StyledMealItemForm = styled.form`
  text-align: right;
  
  button {
    font: inherit;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.header.basic};
    border: 1px solid ${({ theme }) => theme.colors.header.basic};
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`;