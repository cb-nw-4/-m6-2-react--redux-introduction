import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import CartItem from "./CartItem";

const Cart = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const storeItems = useSelector(getStoreItemArray);
  console.log("storeItems", storeItems);

  const totalCost = storeItems.reduce(
    (sum, i) => (sum += i.quantity * i.price),
    0.0
  );

  const NoOfItems = storeItems.reduce((sum, i) => (sum += i.quantity), 0.0);
  return (
    <Wrapper>
      <h1>Your Cart</h1>
      <h2>{NoOfItems} items</h2>

      <Items>
        {storeItems.map((items, id) => (
          <CartItem
            key={id}
            id={items.id}
            title={items.title}
            price={items.price}
            quantity={items.quantity}
          />
        ))}
      </Items>

      <Footer>
        <>
          <Total>Total: ${(totalCost / 100).toFixed(2)}</Total>

          <Purchase>Purchase</Purchase>
        </>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Items = styled.div``;
const Footer = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 710px;
  right: 40px;
`;
const Total = styled.h2``;

const Purchase = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background: #ff406e;
  border: #ff406e;
  color: white;
  font-size: 20px;
`;

export default Cart;
