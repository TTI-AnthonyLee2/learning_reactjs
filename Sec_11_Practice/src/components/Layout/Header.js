import { StyledHeader, StyledMainImg } from '../../styles/Header.styled';

import mealImg from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </StyledHeader>
      <StyledMainImg>
        <img src={mealImg} alt='meals' />
      </StyledMainImg>
    </>
  );
}

export default Header;