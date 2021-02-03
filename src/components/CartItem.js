import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import styled from "styled-components";
import { updateQuantity, removeItem } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({ key, id, title, quantity, updatedQt, setUpdatedQt }) => {
  const [updatedValue, setUpdatedValue] = useState(1);
  const dispatch = useDispatch();
  const storeState = useSelector(getStoreItemArray);


  const handleChange = (event) => {
    dispatch(updateQuantity({ itemId: id, quantity: event.target.value }));
  };


  console.log(updatedValue);
  return (
    <Wrapper key={key} id={id}>
      <ItemMain>
        {" "}
        <ItemName>{title}</ItemName>
        <CloseBtn onClick={() => dispatch(removeItem({ id }))}>X</CloseBtn>
      </ItemMain>
      <Quantity>
        Quantity:
        <InputQt value={quantity} onChange={handleChange} />
      </Quantity>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  list-style-type: none;
  padding: 10px;
  border: #643c68 dashed 1.5px;
`;

const ListItem = styled.li`
  padding: 10px;
`;
const ItemMain = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputQt = styled.input`
  width: 50px;

  border: none;
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
  font-size: 100%;
`;
const ItemName = styled.h3``;
const Quantity = styled.div``;
export default CartItem;
