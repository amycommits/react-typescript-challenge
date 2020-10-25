import React from "react";

type listings = {
  data: string
}

const listings = () => {
  return {data: 'this data'}
}

export const ListingContext = React.createContext(
  listings
);