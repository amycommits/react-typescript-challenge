import React from "react";
// import {SvgWrapper} from '../../styles/stars';
const basicPoint = "14,1.4 5.7,28 27,11 1.4,11 23,28"

function fullStar() {
  return (
    <svg height="30px" width="30px">
        <polygon
          points={basicPoint}
          fill="teal"
        />
      </svg>
  )
}
function emptyStar() {
  return (
    <svg height="30px" width="30px">
        <polygon
          points={basicPoint}
          fill="lightgrey"
        />
      </svg>
  )
}
function gradientStar(rating: number, listingId: number) {
  const offSet = (rating % 1)
  return (
    <svg height="30px" width="30px">
        <linearGradient id={`gradient-${listingId}`}>
          <stop offset="0" stopColor="teal"/>
          <stop offset={offSet} stopColor="teal"/>
          <stop offset={offSet+.01} stopColor="lightgrey"/>
          <stop offset="1" stopColor="lightgrey"/>
        </linearGradient> 
        <polygon
          points={basicPoint}
          fill={`url(#gradient-${listingId})`}
        />
      </svg>
  )
}
function displayLogic(rating: number, starNum: number, listingId: number) {
  if (starNum <= rating) {
    return fullStar()
  } else if (rating % 1 !== 0) {
    return (
      gradientStar(rating, listingId)
    )
  } else {
    return emptyStar()
  }
}
// 30, 15, 5
const star = ({ rating, starNum, listingId }: { rating: number, starNum: number, listingId: number }) => (
  <React.Fragment>
      {displayLogic(rating, starNum, listingId)}
  </React.Fragment>
);

export default star;