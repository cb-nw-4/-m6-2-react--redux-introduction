import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { removeItem, updateQuantity } from '../actions';

import CartItem from './CartItem';
import { getStoreItemArray } from '../reducers';

const Cart = () => {
  const dispatch = useDispatch();
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  let totalPrice = 0;
  
  storeItems.forEach(item => totalPrice += Number(item.price * item.quantity));

  const handleRemoveButton = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if ((/^\d+$/.test(newQuantity) || newQuantity == '')) {
      dispatch(updateQuantity({ id: itemId, newQuantity: Number(newQuantity) }));
    }
  };

  return (
    <Wrapper>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartItemTotal>1 Item</CartItemTotal>
        {storeItems.map(item => <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          itemId={item.id}
          handleRemoveButton={handleRemoveButton}
          handleQuantityChange={handleQuantityChange}
        />)}
      </CartHeader>
      <CartTotal>
        ${totalPrice / 100}
        <PurchaseButton>Purchase</PurchaseButton>
      </CartTotal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  min-width: 250px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;

  /* -webkit-box-pack: justify; */
`;

const CartHeader = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  color: white;
`;

const CartTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CartItemTotal = styled.p`
  /* font-size: 1.5rem; */
  /* font-weight: bold; */
  color: rgba(242, 193, 229, 1);
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PurchaseButton = styled.button`
  /* width: 100px; */
  /* height: 30px; */
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #ff406e;
  padding: 5px 30px;
  margin-left: 10px;
`;

export default Cart;
