import { StyledAvailableMeals, StyledMealItem } from '../../styles/Meals.styled';

import Card from '../UI/Card';

import DUMMY_MEALS from '../../dummy-meals';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({id, name, description, price}) => (
    <StyledMealItem key={id}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$ ${price.toFixed(2)}`}</div>
      </div>
      <div></div>
    </StyledMealItem>
  ));

  return (
    <StyledAvailableMeals>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </StyledAvailableMeals>
  );
}

export default AvailableMeals;