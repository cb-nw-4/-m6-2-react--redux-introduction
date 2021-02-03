import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <Main>
      <ItemGridWrapper>
        <ItemGrid />
        </ItemGridWrapper>
        <CartWrapper>
          <Cart />
        </CartWrapper>
      
      </Main>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;
const Main = styled.div`
display:flex;
`;
const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
 
  width:100%;

`;

const CartWrapper = styled.div`

  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  background-color:#401f43;
width:550px;

`;

export default App;
