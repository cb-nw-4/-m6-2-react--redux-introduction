import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";
import styled from 'styled-components';
import CartItem from "./CartItem";
import Button from './Button';

const Cart = () => {
    const state = useSelector(state=>state)
    console.log(state)
    const storeItems = useSelector(getStoreItemArray);
    //console.log(storeItems)
    let okay = storeItems.find((item) => typeof item === "number")
    //console.log(okay)
    
 
    return (
        <CartPanel>
            <CartText>
                <TopText>
                <h2>Your Cart</h2>
                <p>{storeItems.length ? storeItems.length - 1 : 0} Items</p>
                </TopText>
                {storeItems.map((item) => {
                    if(typeof item !== "number") {
                        return <CartItem key={item.id} item={item}/>
                    }
                })}
            </CartText>
            <PurchaseSection>
                <TotalText>Total: <span>$ {okay? (okay/100).toFixed(2) : 0}</span></TotalText>
                <PurchaseButton>Purchase</PurchaseButton>
            </PurchaseSection>
        </CartPanel>
    )
}

const CartPanel = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 29%;
    min-height: 100vh;
    background-color: #401F43;
    color: white;
    line-height: 0.5;
    padding-top: 15px;
`;

const CartText = styled.div`
    height: 65vh;
    width: 100%;
    overflow-y: auto;
`;

const TopText = styled.div`
    padding-left: 35px;

    & h2{ 
        padding: 5px 0;
    }

    & p {
        color: lightgray;
        padding-bottom: 25px;
    }
`;

const PurchaseSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 35px;
    align-items: center;
    line-height: 0;
`;

const TotalText = styled.p`
    font-size: 22px;
    & span {
        font-weight: bold;
    }
`;

const PurchaseButton = styled(Button)`
    width: 140px;
`;

export default Cart;