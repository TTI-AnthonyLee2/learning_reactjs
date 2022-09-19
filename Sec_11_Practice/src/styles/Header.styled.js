import styled, { css, keyframes } from 'styled-components';

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledMainImg = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

export const StyledHeaderCartBtn = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: ${({ theme }) => theme.colors.header.cart};
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  animation: ${({ isAmountChanged }) => isAmountChanged && css`
    ${bump} 300ms ease-out;
  `} ;

  span:first-of-type {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  span:last-of-type {
    background-color: ${({ theme }) => theme.colors.header.badge};
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover, 
  &:active {
    background-color: #2c0d00;

    span:last-of-type {
      background-color: #92320c;
    }
  }
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.header.basic};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;