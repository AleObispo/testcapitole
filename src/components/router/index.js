import React from "react";
import styled from "styled-components";
import ProductListPageView from "../pages/productListPage";
import ProductDetailsPageView from "../pages/productDetailsPage";
import Header from "../elements/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <MainSection>
      <BrowserRouter>
        <AppContent>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListPageView />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPageView />}
            />
          </Routes>
        </AppContent>
      </BrowserRouter>
    </MainSection>
  );
}

export default Router;
const MainSection = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  width: 100%;
  height: auto;
  background-color: #e5e7e9;
`;
