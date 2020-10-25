import React from "react";
import Star from './star'


const starRating = ({ rating, listingId }: { rating: number, listingId: number }) => (
  <React.Fragment>
    {
      Array.from({length: 5}).map((star, index) =>
        <Star rating={rating} starNum={index+1} listingId={listingId} key="index" />)
    }
  </React.Fragment>
);

export default starRating;