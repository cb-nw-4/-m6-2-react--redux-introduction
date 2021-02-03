import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers";

import GlobalStyles from "./GlobalStyles";

const calculateItemTotals = (itemObj) => {
  const totalCartQuantity = Object.values(itemObj).reduce(
    (totalQty, item) => totalQty + item.quantity,
    0
  );
  const totalCartCost = Object.values(itemObj).reduce(
    (totalCost, item) => totalCost + item.quantity * item.price,
    0
  );
  return { totalCartQuantity, totalCartCost };
};

const Cart = () => {
  const state = useSelector((state) => state);
  const { totalCartQuantity, totalCartCost } = calculateItemTotals(state);
  console.log(totalCartQuantity, totalCartCost);
  const getStoreItemArray = (state) => Object.values(state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  return (
    <Wrapper>
      <Header> Your Cart</Header>
      <Text>{storeItems.length} Item(s)</Text>
      <div>
        {storeItems.map((item, i) => {
          return <CartItem key={i} item={item}></CartItem>;
        })}
      </div>

      <Total>
        <Text>Quantity: {totalCartQuantity} item(s).</Text>
        <Text>Cost: {totalCartCost}$</Text>
      </Total>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
`;
const Total = styled.footer`
  display: flex;
  bottom: 0px;
  position: relative;
  flex-grow: 1;
`;
const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
  flex-grow: 1;
  font-family: "Lato";
  font-size: 24px;
  color: white;
`;

const Text = styled.p`
  margin-right: 10px;
  font-family: "Lato";
  font-size: 24px;
  color: white;

  -webkit-font-smoothing: antialiased;
`;
export default Cart;
