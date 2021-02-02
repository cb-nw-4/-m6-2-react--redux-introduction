import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const state = useSelector(getStoreItemArray);

  return state.length > 0 ? (
    state.map((item, i) => {
      return (
        <Wrapper>
          <CartItem key={i} item={item} name={item.title} quantity={item.quantity}></CartItem>
        </Wrapper>
      );
    })
  ) : (
    <Wrapper></Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  margin: 1rem;
`;

export default Cart;
