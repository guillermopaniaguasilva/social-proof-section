import { Container, Header, Avatar, Name, Title, Text } from './styles';

type ReviewCardProps = {
  name: string;
  imageUrl: string;
  title: string;
  text: string;
};

const ReviewCard = ({ name, imageUrl, title, text }: ReviewCardProps) => {
  return (
    <Container>
      <Header>
        <Avatar src={imageUrl} />
        <div>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </div>
      </Header>
      <Text>{`" ${text} "`}</Text>
    </Container>
  );
};

export default ReviewCard;
