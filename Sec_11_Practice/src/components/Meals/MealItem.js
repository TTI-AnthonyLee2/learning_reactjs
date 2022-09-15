import { useContext, useRef, useState } from 'react';
import Input from '../UI/Input';
import CartContext from '../../store/CartContext';
import { StyledMealItemForm, StyledMealItem } from '../../styles/Meals.styled';

const MealItem = ({id, name, description, price}) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    
    const enteredAmount = parseInt(inputRef.current.value);

    if (isNaN(enteredAmount) || enteredAmount < 0 || enteredAmount > 5) {
      setIsValidAmount(false);
      return;
    } else {
      setIsValidAmount(true);
    }

    cartCtx.addMeal({
      id: id,
      name: name,
      amount: enteredAmount,
      price: price
    });
  }

  return (
    <StyledMealItem>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{`$ ${price.toFixed(2)}`}</div>
      </div>
      <div>
        <StyledMealItemForm onSubmit={handleSubmit}>
          <Input 
            ref={inputRef}
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
          {!isValidAmount && <p>Please enter a valid amount (1-5).</p>}
        </StyledMealItemForm>
      </div>
    </StyledMealItem>
  );
}

export default MealItem;