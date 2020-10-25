import React from "react";
// import {SvgWrapper} from '../../styles/stars';
const basicPoint = "14,1.4 5.7,28 27,11 1.4,11 23,28"

// 30, 15, 5
const star = ({ rating }: { rating: number }) => (
  <React.Fragment>
      <svg height="30px" width="30px">
        <polygon
          points={basicPoint}
          fill="gold"
        />
      </svg>
  </React.Fragment>
);

export default star;