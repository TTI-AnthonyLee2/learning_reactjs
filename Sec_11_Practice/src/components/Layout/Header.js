import { StyledHeader, StyledMainImg, StyledHeaderCartBtn } from '../../styles/Header.styled';
import CartIcon from '../Cart/CartIcon';

import mealImg from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <StyledHeaderCartBtn>
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