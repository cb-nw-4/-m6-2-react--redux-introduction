import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import CartItem from './CartItem';

const Cart = () => {
  return <Wrapper>
      <MainContent>
          <CartTitle>Your Cart</CartTitle>
          <NumItems>0 items</NumItems>
          <List>
              <CartItem/>
              <CartItem/>
          </List>
      </MainContent>
      <PurchasingSection>
          <Total>Total: <b>$120.00</b></Total>
          <PurchaseButton>Purchase</PurchaseButton>
      </PurchasingSection>
      </Wrapper>;
};

const List=styled.ul`
    margin:30px 0px;
    padding:0px;
    width: 100%;

`;
const PurchaseButton = styled(Button)`
    width: 120px;
    margin: 0px 10px;
`;
const Total = styled.div`
    font-size:22px;
    display: block;
`;
const PurchasingSection=styled.div`
    padding:50px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const NumItems = styled.div`
    font-size: 16px;
    padding-top: 10px;
`;
const MainContent = styled.div`
    padding: 30px 32px;
`;
const Wrapper = styled.div`
    position: sticky;
    top:0;
    height: 100vh;
    margin: 0;
    font-size: 32px;
    font-weight: normal;
    font-family: 'Fredoka One';
    min-width: 300px;
    color: white;
    background-color: rgb(64, 31, 67);
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`;
const CartTitle = styled.div`
    font-size: 24px;
    font-weight:bold;
    margin:0;
`;


export default Cart;