import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const state = useSelector(getStoreItemArray);

  const quantity = state
    .map((item) => {
      return item.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
  console.log(quantity);

  const prices = state.map((item) => {
    return item.price * item.quantity;
  });

  const totalPrice = prices.reduce((accum, curr) => {
    return accum + curr;
  }, 0);

  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>Your Cart</h3>
        <div onChange={() => state}>
          {quantity === 0 ? (
            <>Your cart is empty</>
          ) : (
            <>{quantity === 1 ? <>{quantity} item</> : <>{quantity} items</>}</>
          )}
        </div>
      </HeaderWrapper>
      {state.length > 0 ? (
        state.map((item, i) => {
          return <CartItem key={i} item={item}></CartItem>;
        })
      ) : (
        <></>
      )}
      <TotalWrapper>
        <TotalPriceContainer>Total: ${totalPrice}</TotalPriceContainer>
        <Button variant="contained" color="secondary">
          Purchase
        </Button>
      </TotalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  margin: 2em;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 2em;
`;

const TotalPriceContainer = styled.div`
  font-size: 1.1em;
  font-weight: bold;
`;

const TotalWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Cart;
