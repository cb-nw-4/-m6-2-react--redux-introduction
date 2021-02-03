import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { removeItem } from "../actions";
import { updateQuantity } from "../actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <InsideWrapper>
          <Text>{item.title}</Text>

          <Button onClick={() => dispatch(removeItem(item.id))}>X</Button>
        </InsideWrapper>
        <InsideWrapper>
          <Text>${item.price}</Text>
        </InsideWrapper>
        <InsideWrapper>
          <Text>Quantity: {item.quantity}</Text>
          <Input
            type="text"
            value={item.quantity}
            onChange={(e) =>
              dispatch(updateQuantity(item, parseInt(e.target.value)))
            }
          ></Input>
        </InsideWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: #946988;
  flex-direction: column;
  border-style: solid;
  border: 1px;
  border-color: white;
  margin: 10px;
`;

const InsideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #946988;
  border-style: solid;
  border: 1px;
  border-color: white;
  margin: 4px;
`;

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: "Lato";
  font-size: 24px;
  color: white;

  -webkit-font-smoothing: antialiased;
`;

const Input = styled.input`
  margin: 2px;
  padding: 2px;
  font-family: "Lato";
  font-size: 24px;
  background-color: white;

  border-radius: 12px;
  width: 36px;
  height: 36px;

  -webkit-font-smoothing: antialiased;
`;

const Button = styled.button`
  font-family: "Lato";
  -webkit-font-smoothing: antialiased;
  position: relative;
  left: 0px;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default CartItem;
