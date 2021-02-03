import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import styled from "styled-components";
import CartItem from "./CartItem";


const Cart = () => {
  const storeState = useSelector(getStoreItemArray);

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
  const calculateTotalItem = (storeState) => {
    const reducer = (accumulator, storeItem) => {
      if (storeItem.id) {
        return accumulator + storeItem.quantity;
      } else {
        return accumulator;
      }
    }
    return storeState.reduce(reducer, 0);
  }


  return (
    <Wrapper>
      <Main>
        <h1>Your cart</h1>
        <ItemNum> {calculateTotalItem(storeState)} items</ItemNum>
        <CartWrapper>
          {storeState &&
            storeState.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  quantity={item.quantity}
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
