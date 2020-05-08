import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [{
  id: 1,
  name: "Kimchi",
  score: "5point",
  rating: 5
},
{
  id: 2,
  name: "bulgogi",
  score: "10point",
  rating: 3.2
}];

function Food({ name, score, rating }) {
  return (
    <div>
      <div>I like {name}.</div>
      <div>rating : {rating}</div>
      <div>Score: {score}</div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>{foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} score={dish.score} rating={dish.rating} />
    ))}</div>
  );
}

export default App;
