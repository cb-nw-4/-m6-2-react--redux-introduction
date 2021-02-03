import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import Cart from './Cart';

const App = () => {
  return (
    <Wrapper>
      <div style={{flex: 6}}>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </div>
      <CartWrapper>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  background-color: #663399;
  color: white;
  flex: 2;

`;

export default App;
