import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {

  const storeItems = useSelector(getStoreItemArray);

  const calculateTotal = (storeItems) => {
    const reducer = (accumulator, storeItem) => {
      if (storeItem.id) {
        return accumulator + (storeItem.price * storeItem.quantity);
      } else {
        return accumulator;
      }
    }
    return storeItems.reduce(reducer, 0) / 100.0;
  }

  const calculateNumCartItems = (storeItems) => {
    const reducer = (accumulator, storeItem) => {
      if (storeItem.id) {
        return accumulator + storeItem.quantity;
      } else {
        return accumulator;
      }
    }
    return storeItems.reduce(reducer, 0);
  }

  return (
    <Wrapper>
      <ContentContainer>
        <TopContainer>
          <YourCart>
            Your Cart
          </YourCart>
          <Items>{calculateNumCartItems(storeItems)} Items</Items>
        </TopContainer>
        <CartContainer>
        {storeItems.map(storeItem => {
          return (
            <div>
              {storeItem.id &&
              <CartItemContainer>
                <CartItem selectedItem={storeItem} />
              </CartItemContainer>}
            </div>
          )
        })}
        </CartContainer>
        <BottomContainer>
          <TotalPrice>Total: ${calculateTotal(storeItems)}</TotalPrice>
          <PurchaseButton>Purchase</PurchaseButton>
        </BottomContainer>
      </ContentContainer>  
    </Wrapper>
  )
};

const Wrapper = styled.div` 
  width: 400px;
  height: 100%;
  background-color: #2D0E40;
  border: 2px solid #2D0E40;
`;

const ContentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100%;
`;

const TopContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
  margin-bottom: 10px;
`;

const CartContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
`;

const YourCart = styled.p` 
  font-size: 24px;
  color: white;
  font-weight: 700;
  padding: 30px 0px 10px 30px;
  margin: 0px;
`;

const Items = styled.p` 
  color: white;
  font-size: 16px;
  padding-left: 30px;
  margin: 0px;
`;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const BottomContainer = styled.div` 
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalPrice = styled.p` 
font-size: 24px;
  color: white;
  font-weight: 700;
  padding: 30px 0px 30px 30px;
`;

const PurchaseButton = styled(Button)`
  height: 35px;
  width: 150px;
`;

export default Cart;
