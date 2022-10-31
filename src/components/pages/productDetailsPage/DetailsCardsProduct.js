import styled from "styled-components";
import { Card } from "@mui/material";

export const ContainerCheckButtons = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const ContainerActions = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 0px;
`;
export const MainContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  padding-top: 50px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;

  @media only screen and (max-width: 1190px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
  @media only screen and (max-width: 920px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
  @media only screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
  }
`;

export const ContainerButtonAdd = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  margin: -25px 0 0 -25px;
  grid-area: 1 / 2 / 2 / 3;
`;

export const StyledSpan = styled.span`
  color: #808b96;
`;

export const StyledDescription = styled.p`
  color: #212f3d;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const DescriptionLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const DescriptionRigth = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
`;
export const CardStyled = styled(Card)`
  && img {
    width: 100%;
    height: 100%;
  }
  min-width: 300px;
  max-height: 500px;
`;

export const CardStyledRight = styled(Card)`
  max-width: 400px;
  padding: 10px;
  margin-bottom: 16px;
`;
export const CardStyledRightBottom = styled(Card)`
  max-width: 400px;
  padding: 10px;
  margin-bottom: 16px;
`;

export const LeftContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
  grid-area: 1 / 1 / 2 / 2;
`;
export const RigthContainer = styled.div`
  margin: 0 auto;
  grid-area: 1 / 2 / 2 / 3;
  @media only screen and (max-width: 720px) {
    grid-area: 2 / 1 / 2 / 2;
  }
`;
