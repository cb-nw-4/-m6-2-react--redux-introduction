import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({selectedItem}) => {

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ItemContainer>
        <ItemName>Product: {selectedItem.title}</ItemName>
        <CloseButton onClick={() => dispatch(removeItem({...selectedItem}))}>
          <Close>X</Close>
        </CloseButton> 
      </ItemContainer>  
      <QuantityContainer>
        <Quantity>Quantity: </Quantity>
        <QuantityInput type="text" value={selectedItem.quantity}/>
      </QuantityContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80px;
  width: 100%;
  margin: 10px 30px;
  border: 1px dashed white;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const ItemName = styled.p` 
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding-left: 20px;
  margin: 0px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background: none;
  border: none;
  margin-right: 20px;
`;

const Close = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin: 0px;
`;

const QuantityContainer = styled.div` 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #180921;
  height: 40px;
`;

const Quantity = styled.p` 
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin: 0px 0px 10px 20px;
`;

const QuantityInput = styled.input`
  width: 25px;
  height: 25px;
  margin: 0px 0px 5px 10px;
`;

export default CartItem;
