import React from "react";
import Avatar from "../avatar";
import StarRating from '../listing_card/star_rating'
import get from "lodash.get";
import BusinessHours from './business_hours'
import { CardWrapper, CardInfoWrapper, CardInfo, BusinessName, RatingSection, RatingNumber} from "../styles/listings"

function businessHours(businessHourInfo: any) {
  return Object.entries(businessHourInfo).map(day => {
    return (<BusinessHours hourInfo={day} />)
  })
}
// let InfoPage = (props: RouteComponentProps) => <BusinessInfo />
const Details = ({ listing }: { listing: any }) => (
  <div>
    <CardWrapper data-cy="listing-card">
      <Avatar img={`${get(listing, "avatar_image.original_url")}`} />
      <CardInfoWrapper>
        <CardInfo> {listing.city} </CardInfo>
        <BusinessName> {listing.name} </BusinessName>
        <RatingSection> 
          <StarRating rating={listing.rating} listingId={listing.id} />
          <RatingNumber>{listing.rating.toPrecision(2)}</RatingNumber>
        </RatingSection>
      </CardInfoWrapper>   
    </CardWrapper>
    <CardInfo> {listing.phone_number} </CardInfo>
    <CardInfo> {listing.address} </CardInfo>
    <div>{businessHours(listing.business_hours)}</div>
  </div>
);

export default Details;
