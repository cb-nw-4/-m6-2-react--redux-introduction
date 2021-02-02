import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

import { getStoreItemArray } from '.././reducers';
import {removeItem} from '.././actions';

const Cart = () => {
    // const state = useSelector(state => state);
    const storeItems = useSelector(getStoreItemArray);
    console.log(storeItems);
    const dispatch = useDispatch();
        // storeItems returns an array of objects that look like this:
            // { id: "tea-rex", price: 229, quantity: 1, title: "Tea Rex" }
    // price? quantity???
    
    return (
        <div>
            <h1>Your Cart</h1>
            <p>1 item</p>
            {!storeItems
                    ? null
                    : 
                        <>
                        {storeItems.map((storeItem) => {
                            return (
                                <CartItemContainer key={storeItem.id}>
                                    <TopContainer>
                                        <StickerTitle>{storeItem.title}</StickerTitle>
                                        <CancelButton onClick={() =>
                                        dispatch(removeItem(storeItem.id, storeItem.title, storeItem.quantity))}
                                        // console.log(storeItem.id)}
                                        >X</CancelButton>
                                    </TopContainer>
                                    <QuantityContainer>
                                        <Quantity>Quantity:</Quantity><QuantitySpan>{storeItem.quantity}</QuantitySpan>
                                    </QuantityContainer>
                                </CartItemContainer>
                            )
                        })}
                        </>
            }
            <TotalContianer>
                <Total>Total:</Total><TotalSpan>$1.00</TotalSpan>
                <PurchaseButton>Purchase</PurchaseButton>
            </TotalContianer>
        </div>
    )
}

const CartItemContainer = styled.div`
    width: 90%;
    border: 2px dashed gray;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StickerTitle = styled.h2`
    font-size: 16pt;
`;

const CancelButton = styled.button`
    background-color: #401F43;
    border-style: none;
    color: white;
    font-size: 16pt;

    &:hover {
        cursor: pointer;
    }
`;

const QuantityContainer = styled.div`
    background-color: #1a001a;
    display: inline-block;
    width: 100%;
    color: lightgray;
`;

const Quantity = styled.p`
    display: inline-block;
`;

const QuantitySpan = styled.span`
    width: 50px;
    height: 50px;
    color: #1a001a;
    background-color: white;
`;

const TotalContianer = styled.div`
    position: absolute;
    top: 75%;
    /* display: flex;
    justify-content: space-between; */
`;

const Total = styled.h3`
    display: inline-block;
`;

const TotalSpan = styled.span`
    display: inline-block;
`;

const PurchaseButton = styled.button`
    background-color: #FF406E;
    border-radius: 12px;
    width: 150px;
    padding: 5px;
    color: white;
    font-weight: bold;
    font-size: 12pt;
    border-style: none;
    position: absolute;
    left: 100%;
`;


export default Cart;