import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Cart from "./Cart";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <Wrapper>
        <FlexWrapper>
          <Header>
            <Logo />
          </Header>
          <ItemGridWrapper>
            <ItemGrid />
          </ItemGridWrapper>
        </FlexWrapper>
        <CartWrapper>
          <Cart />
        </CartWrapper>
        <GlobalStyles />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
`;
const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

const CartWrapper = styled.div`
  background: #320e3d;
  color: white;
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 38px;
  width: 30vw;
`;
const Header = styled.header`
  grid-area: header;
  padding-left: 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

export default App;
