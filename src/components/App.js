import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import Cart from './Cart';
import { getStoreItemArray } from '../reducers/index';

const App = () => {
  const storeItems = useSelector(getStoreItemArray);
  // console.log(Cart);
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <CartWrapper style={{display: storeItems.length>0 ? 'block' : 'none'}}>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display:grid;
  grid-template-areas:"header header header sidebar" "main main main sidebar";
  height:100vh;
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
  width:100%;
  background-color:black;
`;

export default App;
