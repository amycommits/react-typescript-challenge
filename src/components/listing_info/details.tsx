import React from "react";
import Avatar from "../avatar";
import StarRating from '../listing_card/star_rating'
import get from "lodash.get";
import { CardWrapper, CardInfoWrapper, CardInfo, BusinessName, RatingSection, RatingNumber} from "../styles/listings"

// let InfoPage = (props: RouteComponentProps) => <BusinessInfo />
const Details = ({ listing }: { listing: any }) => (
  <CardWrapper data-cy="listing-card">
    <Avatar img={`${get(listing, "avatar_image.original_url")}`} />
    <CardInfoWrapper data-cy="listing-info-wrapper">
      <CardInfo> {listing.city} </CardInfo>
      <BusinessName> {listing.name} </BusinessName>
      <RatingSection> 
        <StarRating rating={listing.rating} listingId={listing.id} />
        <RatingNumber>{listing.rating.toPrecision(2)}</RatingNumber>
      </RatingSection>
    </CardInfoWrapper>   
  </CardWrapper>
);

export default Details;
