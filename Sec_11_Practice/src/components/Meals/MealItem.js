import { StyledMealItemForm, StyledMealItem } from '../../styles/Meals.styled';
import Input from '../UI/Input';

const MealItem = ({id, name, description, price}) => {
  return (
    <StyledMealItem>
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
  );
}

export default MealItem;