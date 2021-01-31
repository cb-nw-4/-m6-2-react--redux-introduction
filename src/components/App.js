import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import Cart from "./Cart";

const App = () => {
  return (
    <CartContainer>
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
        <GlobalStyles />
      </Wrapper>
      <CartWrapper>    
        <Cart />
      </CartWrapper>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  height: auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
