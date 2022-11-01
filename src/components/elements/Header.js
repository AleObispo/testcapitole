import React, { useEffect } from "react";
import styled from "styled-components";
import { Breadcrumbs, Link } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// eslint-disable-next-line react/prop-types
const Header = ({ itemsCart }) => {
  useEffect(() => {
    setTimeout(() => {
      window.localStorage.clear();
    }, 3600000);
  }, [itemsCart]);

  return (
    <>
      <StyledHeader>
        <HomeContainer>
          <Link href="/" underline="none">
            HOME
          </Link>
        </HomeContainer>
        <BreadContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline={window.location.pathname === "/" ? "none" : "hover"}
              color={window.location.pathname === "/" ? "primary" : "#212F3D"}
              href={window.location.pathname !== "/" ? "/" : null}
            >
              <StyledLabel>Listado de productos</StyledLabel>
            </Link>
            {window.location.pathname !== "/" && (
              <Link
                underline={window.location.pathname !== "/" ? "none" : "hover"}
                color={window.location.pathname !== "/" ? "primary" : "#212F3D"}
              >
                <StyledLabel>Detalle de producto</StyledLabel>
              </Link>
            )}
          </Breadcrumbs>
        </BreadContainer>
        <CartContainer>
          <StyledToolContainer>
            {itemsCart !== undefined && (
              <StyledTool
                open={true}
                title={itemsCart === "null" || !itemsCart ? "0" : itemsCart}
                placement="left"
                arrow
              >
                <StyledIconButton>
                  <StyledIconCart />
                </StyledIconButton>
              </StyledTool>
            )}
          </StyledToolContainer>
        </CartContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
const StyledIconCart = styled(ShoppingCartOutlinedIcon)`
  && {
    margin-left: -8px;
    height: 36px;
    width: 36px;
  }
`;
const StyledLabel = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 3px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
`;
const StyledToolContainer = styled.div`
  margin-right: 5px;
  text-align: right;
`;

const CartContainer = styled.div`
  padding-right: 20px;
  grid-area: 2 / 2 / 3 / 3;
`;
const BreadContainer = styled.div`
  padding-left: 20px;
  grid-area: 2 / 1 / 3 / 2;
`;
const HomeContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 10px;
  grid-area: 1 / 1 / 2 / 2;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 70px;
  width: 100%;
  background: rgb(179, 182, 183);
  background: linear-gradient(
    0deg,
    rgba(179, 182, 183, 1) 0%,
    rgba(240, 240, 245, 0.9783263647255778) 49%
  );
  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
    height: 120px;
  }
`;
const StyledTool = styled(Tooltip)`
  margin-top: 0px;
  && {
    .MuiTooltip-popper {
      .MuiTooltip-tooltip {
        margin-left: 0px;
      }
    }
  }

  height: 0px;
  width: auto;
  .MuiTooltip-tooltip {
    margin-left: 0px;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    padding: 0px;
  }
`;
