import { StyledAvailableMeals, StyledMealItem, StyledMealItemForm } from '../../styles/Meals.styled';

import Card from '../UI/Card';
import Input from '../UI/Input';

import DUMMY_MEALS from '../../dummy-meals';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({id, name, description, price}) => (
    <StyledMealItem key={id}>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$ ${price.toFixed(2)}`}</div>
      </div>
      <div>
        <StyledMealItemForm>
          <Input 
            label='Amount'
            input={{
              id: `amount-${id}`,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
            }}
          />
          <button>+ Add</button>
        </StyledMealItemForm>
      </div>
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