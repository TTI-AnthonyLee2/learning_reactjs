import CartIcon from '../Cart/CartIcon';

import { useContext, useEffect, useState } from 'react';

import { StyledHeader, StyledMainImg, StyledHeaderCartBtn } from '../../styles/Header.styled';

import mealImg from '../../assets/meals.jpg';

import ModalContext from '../../store/ModalContext';
import CartContext from '../../store/CartContext';

const Header = () => {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const [isAmountChanged, setIsAmountChanged] = useState(false);

  const numOfCartMeals = cartCtx.mealsList.reduce((acc, meal) => acc + meal.amount, 0);

  useEffect(() => {
    if (numOfCartMeals === 0 ) return;

    console.log('side-effect');

    setIsAmountChanged(true);

    const animationDisabledTimer = setTimeout(() => {
      setIsAmountChanged(false);
    }, 300);

    return () => {
      console.log('cleanup')
      clearTimeout(animationDisabledTimer);
    }

  }, [numOfCartMeals]);

  console.log('Header rendering...', isAmountChanged)

  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <StyledHeaderCartBtn onClick={modalCtx.showModal} isAmountChanged={isAmountChanged}>
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