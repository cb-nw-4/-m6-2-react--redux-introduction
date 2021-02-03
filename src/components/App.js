import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import Cart from './Cart';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 0.5fr 6fr;
  grid-template-columns: 2.5fr 1fr;
  grid-template-areas:
    'header sidebar'
    'main sidebar';
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
  background: #441f47;
  background-clip: content-box;
`;

export default App;
