import { StyledAvailableMeals, StyledMealItem } from '../../styles/Meals.styled';

import DUMMY_MEALS from '../../dummy-meals';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({id, name, description, price}) => (
    <StyledMealItem key={id}>
      <h3>{name}</h3>
    </StyledMealItem>
  ));

  return (
    <StyledAvailableMeals>
      <ul>
        {mealsList}
      </ul>
    </StyledAvailableMeals>
  );
}

export default AvailableMeals;