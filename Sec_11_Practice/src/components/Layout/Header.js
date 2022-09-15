import CartIcon from '../Cart/CartIcon';

import { useContext } from 'react';

import { StyledHeader, StyledMainImg, StyledHeaderCartBtn } from '../../styles/Header.styled';

import mealImg from '../../assets/meals.jpg';

import ModalContext from '../../store/ModalContext';
import CartContext from '../../store/CartContext';

const Header = () => {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);
  
  const numOfCartMeals = cartCtx.mealsList.reduce((acc, meal) => acc + meal.amount, 0);

  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <StyledHeaderCartBtn onClick={modalCtx.showModal}>
          <span><CartIcon /></span>
          <span>Your Cart</span>
          <span>{numOfCartMeals}</span>
        </StyledHeaderCartBtn>
      </StyledHeader>
      <StyledMainImg>
        <img src={mealImg} alt='meals' />
      </StyledMainImg>
    </>
  );
}

export default Header;