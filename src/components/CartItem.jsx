import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem } from "../actions";

const CartItem = ({ id, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <>
      {quantity > 0 && (
        <PurchaseBox>
          <FlexWrapper>
            <Name>{title}</Name>
            <Xbutton>
              <button onClick={() => dispatch(removeItem({ id, title }))}>
                X
              </button>
            </Xbutton>
          </FlexWrapper>
          <Quantity>Quantity:{quantity}</Quantity>
        </PurchaseBox>
      )}
    </>
  );
};

const Name = styled.div`
  font-size: 25px;
  padding-bottom: 10px;
  color: white;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 345px;
  padding-top: 15px;
  padding-left: 15px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Xbutton = styled.div`
  font-size: 25px;
  padding: 15px;
`;

const Quantity = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  font-size: 20px;
`;
const PurchaseBox = styled.div`
  margin-top: 20px;
  border: 3px dashed rgba(183, 180, 184, 0.2);
  width: 350px;
  height: 125px;
`;

export default CartItem;
