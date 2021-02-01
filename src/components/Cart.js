import React from 'react';
import styled from 'styled-components';

import CartItem from './CartItem';

const Cart = () => {
  return (
    <Wrapper>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartItemTotal>1 Item</CartItemTotal>
        <CartItem />
      </CartHeader>
      <CartTotal>
        $100.00
        <PurchaseButton>Purchase</PurchaseButton>
      </CartTotal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  min-width: 250px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;

  /* -webkit-box-pack: justify; */
`;

const CartHeader = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  color: white;
`;

const CartTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CartItemTotal = styled.p`
  /* font-size: 1.5rem; */
  /* font-weight: bold; */
  color: rgba(242, 193, 229, 1);
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PurchaseButton = styled.button`
  /* width: 100px; */
  /* height: 30px; */
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #ff406e;
  padding: 5px 30px;
  margin-left: 10px;
`;

export default Cart;
