import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <ListItem key="alpaca">
        <ItemMain>
          {" "}
          <ItemName>Pink Alpaca</ItemName>
          <CloseBtn>X</CloseBtn>
        </ItemMain>
        <Quantity>Quantity: <InputQt type="number"></InputQt></Quantity>
      </ListItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

const ListItem = styled.li`
  border: white dashed 1px;
  padding:10px;
`;
const ItemMain = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputQt = styled.input`
width:50px;

border:none;
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight:bolder;
  font-size:100%;
`;
const ItemName = styled.h3``;
const Quantity = styled.p``;
export default CartItem;
