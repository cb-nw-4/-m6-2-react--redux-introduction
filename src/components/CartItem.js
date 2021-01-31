import React from "react";
import styled from "styled-components";

const CartItem = ({selectedItem}) => {

  if (selectedItem) {
    console.log(selectedItem);
  }

  return (
    <Wrapper>
      <ItemContainer>
        <ItemName>Product: {selectedItem.title}</ItemName>
        <Close>X</Close>
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

const Close = styled.p` 
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding-right: 20px;
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
