import styled from "styled-components";
export const CardWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px;
  border: 1px solid #cdcece;
  box-shadow: 2px 3px #d4d7d7;
`;
export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CardInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const BusinessName = styled(CardInfo)`
  font-weight: bold;
`

export const RatingSection = styled(CardInfo)`
  display: flex;
`

export const RatingNumber = styled.div`
  flex: 1
`