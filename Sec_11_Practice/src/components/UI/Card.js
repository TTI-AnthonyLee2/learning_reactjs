import { StyledCard } from '../../styles/Card.styled';

const Card = ({ children }) => {
  return (
    <StyledCard>{children}</StyledCard>
  );
}

export default Card;