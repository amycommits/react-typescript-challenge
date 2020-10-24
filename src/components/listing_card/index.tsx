import React from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";

const CardWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px;
  border: 1px solid #cdcece;
  box-shadow: 2px 3px #d4d7d7;
`;
const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CardInfo = styled.div`
  flex: 1;
  text-align: left;
`;
const ListingCard = ({ listing }: { listing: any }) => (
  <CardWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <CardInfoWrapper>
      <CardInfo> {listing.name} </CardInfo>
      <CardInfo> {listing.city} </CardInfo>
      <CardInfo> {listing.rating.toPrecision(2)} </CardInfo>
    </CardInfoWrapper>
  </CardWrapper>
);

export default ListingCard;
