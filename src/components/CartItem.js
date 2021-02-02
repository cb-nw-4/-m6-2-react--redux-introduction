import React from "react";
import styled from "styled-components";
// import InputBase from '@material-ui/core/InputBase'
import {removeItem, updateQuantity} from '../actions'
import {useDispatch} from 'react-redux'

const CartItem = ({name, quantity, item}) => {
  const dispatch = useDispatch()
  const onClickFunc = () => {
    dispatch(removeItem(item))
  }
  const onChangeFunc = (ev) => {
    const newQuantity = ev.target.value
    dispatch(updateQuantity(item, newQuantity))
  }


  return (
    <ItemWrapper>
      <ItemHeaderWrapper>
        <div>{name}</div>
        <button onClick={onClickFunc}>
          X</button>
      </ItemHeaderWrapper>
      <QuantityContainer>
        <div>Quantity:</div>
        <input 
        onChange={onChangeFunc}
        value={quantity} style={{width:'25px'}}></input>
      </QuantityContainer>
    </ItemWrapper>
  );
};

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 10rem 0.5rem 1rem;
  background-color: #8a2be2;
 
`;

const ItemWrapper = styled.div`
  border: 1px dashed whitesmoke;
  /* margin: 1rem; */
`;

const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;
export default CartItem;
