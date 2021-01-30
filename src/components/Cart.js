import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Total from "./Total";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const state = useSelector(getStoreItemArray);
  console.log(state);

  return state.length > 0 ? (
    state.map((item) => {
      return (
        <Wrapper>
          <CartItem name={item.title}></CartItem>
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
