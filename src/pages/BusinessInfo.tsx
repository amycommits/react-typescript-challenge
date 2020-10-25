import React from "react";
import * as config from "../constants/config";
import Details from '../components/listing_info/details'
import listingDetails from '../components/listing_info/tmp_data.json'

// react-dom and reach-react were not passing in props properly
function BusinessInfo () {
  type listing = any
  type blob = any;
  type json = {
    data: any
  }
  // function getListing() {
  //   const listingId = window.location.pathname.replace('/info/','') 
  //   type url = string;
  //   const url = `https://${config.API_HOST}/discovery/v1/listings/${listingId}`;
  
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   };

  //   const listing = []
  //   return fetch(url, options).then((blob: any) => {
  //     blob.json()
  //   }).then((data: any) => {
  //    return data
  //   })
    
    
  // }
  type details = any
  const details = listingDetails
return (
  <React.Fragment>
    <Details listing={details.listing}/>
  </React.Fragment>
)};

export default BusinessInfo;
