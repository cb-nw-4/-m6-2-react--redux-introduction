import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <TopContainer>
          <YourCart>
            Your Cart
          </YourCart>
          <Items>0 Items</Items>
        </TopContainer>
        <CartItemContainer>
          <CartItem />    
        </CartItemContainer>  
        <BottomContainer>
          <TotalPrice>Total: $0.00</TotalPrice>
          <PurchaseButton>Purchase</PurchaseButton>
        </BottomContainer>
      </ContentContainer>  
    </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 400px;
  height: 100%;
  background-color: #2D0E40;
  border: 2px solid #2D0E40;
`;

const ContentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100%;
`;

const TopContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

const YourCart = styled.p` 
  font-size: 24px;
  color: white;
  font-weight: 700;
  padding: 30px 0px 0px 30px;
  margin: 0px;
`;

const Items = styled.p` 
  color: white;
  font-size: 16px;
  padding-left: 30px;
  margin: 0px;
`;

const CartItemContainer = styled.div`
  display: flex;
`;

const BottomContainer = styled.div` 
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalPrice = styled.p` 
font-size: 24px;
  color: white;
  font-weight: 700;
  padding: 30px 0px 30px 30px;
`;

const PurchaseButton = styled(Button)`
  height: 35px;
  width: 150px;
`;

export default Cart;
