import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

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
        <CartItemTotal>{storeItems.length} {storeItems.length === 1 ? 'Item' : 'Items'} </CartItemTotal>
        <CartItems>
        {storeItems.map(item => <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          itemId={item.id}
          handleRemoveButton={handleRemoveButton}
          handleQuantityChange={handleQuantityChange}
        />)}
        </CartItems>
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
  min-width: 275px;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  background-color: #401f43;
`;

const CartHeader = styled.div`
  color: white;
`;

const CartTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
`;

const CartItemTotal = styled.div`
  overflow: auto;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  color: white;
`;

const CartItems = styled.div`
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding-left: 30px;
  padding-right: 30px;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PurchaseButton = styled.button`
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #ff406e;
  padding: 5px 40px;
  margin-left: 10px;
`;

export default Cart;
