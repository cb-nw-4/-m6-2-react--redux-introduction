import React from "react";
import styled from "styled-components";
import CartItem from './CartItem'
import Total from './Total'
import {useSelector} from 'react-redux'
import {getStoreItemArray} from '../reducers/index'


const Cart = () => {
  const state = useSelector(getStoreItemArray)
  console.log(state)
  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>Your Cart</h3>
        <p>1 item</p>
      </HeaderWrapper>
      <CartItem></CartItem>
      <Total></Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  margin: 1rem;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`;

export default Cart;
