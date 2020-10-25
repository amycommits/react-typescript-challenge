import React from "react";
import Star from './star'


const starRating = ({ rating }: { rating: number }) => (
  <React.Fragment>
    {
      Array.from({length: 5}).map((star, index) =>
        <Star rating={rating} key={index}/>)
    }
  </React.Fragment>
);

export default starRating;