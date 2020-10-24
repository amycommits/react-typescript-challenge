import React from "react";
import Avatar from "../avatar";
import get from "lodash.get";
import { CardWrapper, CardInfoWrapper, CardInfo } from "../styles/listings"

const ListingCard = ({ listing }: { listing: any }) => (
  <CardWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <CardInfoWrapper>
      <CardInfo> {listing.city} </CardInfo>
      <CardInfo> {listing.name} </CardInfo>
      <CardInfo> {listing.rating.toPrecision(2)} </CardInfo>
    </CardInfoWrapper>
  </CardWrapper>
);

export default ListingCard;
