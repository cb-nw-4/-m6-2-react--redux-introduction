import React from "react";
import styled from 'styled-components';
import CartItem from "./CartItem";
import Button from './Button';

const Cart = () => {

    return (
        <CartPanel>
            <CartText>
                <TopText>
                <h2>Your Cart</h2>
                <p>0 Items</p>
                </TopText>
                <CartItem />
            </CartText>
            <PurchaseSection>
                <TotalText>Total:</TotalText>
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
`;

const PurchaseButton = styled(Button)`
    width: 140px;
`;

export default Cart;