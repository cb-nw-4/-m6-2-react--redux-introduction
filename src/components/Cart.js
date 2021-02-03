import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../actions";

const Cart = () => {
  const [updatedQt, setUpdatedQt] = useState(1);

  const storeState = useSelector(getStoreItemArray);
console.log(storeState)
  let totalPrice = 0;
  const calculateTotal = (storeState) => {
    const reduceTotal = (accumulator, storeItem) => {
      if (storeItem.id) {
        return accumulator + storeItem.price * storeItem.quantity;
      } else {
        return accumulator;
      }
    };
    return storeState.reduce(reduceTotal, 0) / 100;
  };

  console.log(calculateTotal(storeState));
  return (
    <Wrapper>
      <Main>
        <h1>Your cart</h1>
        <ItemNum> {storeState.length} items</ItemNum>
        <CartWrapper>
          {storeState &&
            storeState.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  quantity={item.quantity}
                  updatedQt={updatedQt}
                  setUpdatedQt={setUpdatedQt}
                />
              );
            })}
        </CartWrapper>
      </Main>
      <Total>
        <TotalNum>Total: {calculateTotal(storeState)}</TotalNum>
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
const CartWrapper = styled.ul`
  padding: 10px;
`;
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
