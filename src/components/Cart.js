import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "./Button";
import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const totalItems = storeItems.length
  let total = 0;
  storeItems.map((item) => (total += item.quantity * item.price));
  let formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total / 100);

  return (
    <Wrapper>
      <MainContent>
        <CartTitle>Your Cart</CartTitle>
        <NumItems onchange={()=>storeItems}>{totalItems} Items</NumItems>
        <List>
        {
            storeItems.map((item)=> item.quantity&&item.quantity>0?
            <CartItem 
                key={item.id} 
                id={item.id} 
                name={item.title}
                quantity={item.quantity}
            />:null)
            }
        </List>
      </MainContent>
      <PurchasingSection>
        <Total>
        <Total>Total: {total>0? <b>{formatedPrice}</b>: <b>$0.00</b>}</Total>
        </Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </PurchasingSection>
    </Wrapper>
  );
};

const List = styled.ul`
    margin-top:30px;
    padding:0px 20px;
    width: 100%;
    max-height:calc(100vh - 300px);
    overflow: auto;
`;
const PurchaseButton = styled(Button)`
  width: 120px;
  margin: 0px 10px;
  position: sticky;
`;
const Total = styled.div`
  font-size: 22px;
  display: block;
`;
const PurchasingSection = styled.div`
  padding: 50px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NumItems = styled.div`
  font-size: 16px;
  padding-top: 10px;
  padding-left: 30px;
`;
const MainContent = styled.div`
  padding: 30px 32px;
  padding: 30px 0px;
`;
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  margin: 0;
  font-size: 32px;
  font-weight: normal;
  font-family: "Fredoka One";
  min-width: 300px;
  color: white;
  background-color: rgb(64, 31, 67);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CartTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding-left: 30px;
`;

export default Cart;
