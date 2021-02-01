import React from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  const state = useSelector(getStoreItemArray);
  console.log(state);

  let totalPrice = 0;
  state.forEach((item) =>{
      return totalPrice += item.price * item.quantity;
  })

  const finalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice / 100);
  return (
    <Wrapper>
      <Main>
        <h1>Your cart</h1>
        <ItemNum> {state.length} items</ItemNum>
        <CartWrapper>
          {state &&
            state.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  quantity={item.title}
                />
              );
            })}
        </CartWrapper>
      </Main>
      <Total>
        <TotalNum>Total: {finalPrice}</TotalNum>
        <PurchaseBtn>Purchase</PurchaseBtn>
      </Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  padding: 10px;
`;

const ItemNum = styled.h5``;
const CartWrapper = styled.ul``;
const Main = styled.div``;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalNum = styled.h2``;
const PurchaseBtn = styled.button`
  color: white;
  font-size: 100%;
  height: 50px;
  width: 100px;
  background-color: #ff406e;
  border: none;
  border-radius: 30px;
`;
export default Cart;
