import React from "react";
import styled from "styled-components";
import { Breadcrumbs, Link } from "@mui/material";

/* import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; */
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  console.log(window.location.pathname);
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
              underline={window.location.pathname === "/" ? "always" : "hover"}
              color={window.location.pathname === "/" ? "primary" : "#212F3D"}
              href="/"
            >
              <StyledLabel>Listado de productos</StyledLabel>
            </Link>
            {window.location.pathname === "/product-details" && (
              <Link
                underline={
                  window.location.pathname === "/product-details"
                    ? "always"
                    : "hover"
                }
                color={
                  window.location.pathname === "/product-details"
                    ? "primary"
                    : "#212F3D"
                }
                href="/product-details"
              >
                <StyledLabel>Detalle de producto</StyledLabel>
              </Link>
            )}
          </Breadcrumbs>
        </BreadContainer>
        <CartContainer>
          <StyledToolContainer>
            <StyledTool open={true} title="3" placement="left" arrow>
              <StyledIconButton>{/* <StyledIconCart /> */}</StyledIconButton>
            </StyledTool>
          </StyledToolContainer>
        </CartContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
/* const StyledIconCart = styled(ShoppingCartOutlinedIcon)`
  && {
    margin-left: -8px;
    height: 36px;
    width: 36px;
  }
`; */
const StyledLabel = styled.p`
  font-size: 12px;
`;
const StyledToolContainer = styled.div`
  margin-right: 5px;
  text-align: right;
`;

const CartContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
const BreadContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
const HomeContainer = styled.div`
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
  background-color: #84b6f4;
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
