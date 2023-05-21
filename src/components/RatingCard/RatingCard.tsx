import { Container, StarsContainer, Star, Text } from './styles';

type RatingCardProps = {
  starsQuantity: number;
  text: string;
};

const RatingCard = ({ starsQuantity, text }: RatingCardProps) => {
  return (
    <Container>
      <StarsContainer>
        {[...Array(starsQuantity)].map((_, i) => (
          <Star key={i} src="assets/images/icon-star.svg" />
        ))}
      </StarsContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default RatingCard;
