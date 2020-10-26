import React from "react";


const BusinessHours = ({ hourInfo }: { hourInfo: any }) => (
  <div>
    <div>{hourInfo[0]}</div>
    <div>{hourInfo[1].open}</div>
    <div>{hourInfo[1].close}</div>
  </div>
);

export default BusinessHours;
