import React, { useEffect } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";
import CartItem from "./CartItem";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ShopWrapper>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
        <CartWrapper>
          <Cart>
            Cart
            <CartItem>Item</CartItem>
          </Cart>
          
        </CartWrapper>
      </ShopWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ShopWrapper = styled.div`
  display: flex;
  position: relative;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  flex-grow: 3;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  flex-grow: 1;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;

  background: #a987a0;
`;

export default App;
