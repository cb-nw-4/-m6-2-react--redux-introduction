import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper><Main>
      <h1>Your cart</h1>
      <ItemNum> 2 items</ItemNum>
      <CartWrapper key="alpaca">
        <CartItem />
      </CartWrapper>
      </Main>
      <Total>
<TotalNum>Total: $12.34</TotalNum>
<PurchaseBtn>Purchase</PurchaseBtn>
      </Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  padding:10px;

`;

const ItemNum = styled.h5``;
const CartWrapper = styled.div``;
const Main = styled.div``;
const Total = styled.div`
display:flex;
justify-content:space-between;
`;

const TotalNum = styled.h2``;
const PurchaseBtn = styled.button`
color: white;
font-size:100%;
height:50px;
width:100px;
background-color:#FF406E;
border:none;
border-radius:30px;
`;
export default Cart;
