import CartIcon from '../Cart/CartIcon';

import { useContext } from 'react';

import { StyledHeader, StyledMainImg, StyledHeaderCartBtn } from '../../styles/Header.styled';

import mealImg from '../../assets/meals.jpg';

import ModalContext from '../../store/ModalContext';

const Header = () => {
  const modalCtx = useContext(ModalContext);
  
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <StyledHeaderCartBtn onClick={modalCtx.showModal}>
          <span><CartIcon /></span>
          <span>Your Cart</span>
          <span>5</span>
        </StyledHeaderCartBtn>
      </StyledHeader>
      <StyledMainImg>
        <img src={mealImg} alt='meals' />
      </StyledMainImg>
    </>
  );
}

export default Header;