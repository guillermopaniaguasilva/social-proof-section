import './App.css';
import { Heading, Description } from './styles';
import RatingCard from '../RatingCard/RatingCard';
import ReviewCard from '../ReviewCard/ReviewCard';
import ratings from '../../data/ratings.json';
import reviews from '../../data/reviews.json';

const App = () => {
  return (
    <main className="app">
      <section>
        <Heading>10,000+ of our users love our products.</Heading>
        <Description>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </Description>
      </section>
      <section>
        {ratings.map(({ starsQuantity, text }) => (
          <RatingCard starsQuantity={starsQuantity} text={text} />
        ))}
      </section>
      <section>
        {reviews.map(({ name, imageUrl, title, text }, i) => (
          <ReviewCard
            key={i}
            name={name}
            imageUrl={imageUrl}
            title={title}
            text={text}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
