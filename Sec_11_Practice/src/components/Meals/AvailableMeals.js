import { StyledAvailableMeals } from '../../styles/Meals.styled';

import MealItem from './MealItem';
import Card from '../UI/Card';

import DUMMY_MEALS from '../../dummy-meals';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
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