import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartItem from './CartItem';
import { getStoreItemArr } from '../reducers';
import { calculateTotal } from '../reducers/index';

const CartContainer = styled.div`
`;

const CartHeading = styled.h3`
    color: white;
    font-size: 25px;
    margin-bottom: 5px;
    margin-left: 30px;
`;

const NumOfItems = styled.div`
    color: white;
    font-size: 18px;
    margin-bottom: 35px;
    margin-left: 30px;
    opacity: 75%;
`;

const Total = styled.div`
    color: white;
    font-size: 25px;
    padding: 8px 0;
    display: inline-block;
    position: fixed;
    margin-left: 30px;
    bottom: 30px;
`;

const PurchaseBtn = styled.button`
    color: white;
    font-size: 25px;
    padding: 8px 30px;
    background: #ff406e;
    border: none;
    border-radius: 12px;
    display: inline-block;
    position: fixed;
    right: 30px;
    bottom: 30px;
`;


const Cart = () => {
    const storeItems = useSelector(getStoreItemArr);
    const cartItems = useSelector(state => state);
    const { totalCartQuantity, totalCartCost } = calculateTotal(cartItems);
    
    const formattedTotalCost = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalCartCost / 100);

    return (
        <CartContainer>
            <CartHeading>Your Cart</CartHeading>
            {totalCartQuantity ? (
                <NumOfItems>{`${totalCartQuantity} Item`}</NumOfItems>
            ) : (
                <NumOfItems>0 Item</NumOfItems>
            )}
            <div>
                {storeItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div>
                {totalCartQuantity ? (
                    <Total>{`Total: ${formattedTotalCost}`}</Total>
                ) :
                    <Total>Total: $0</Total>
                }
                <PurchaseBtn>Purchase</PurchaseBtn>
            </div>
            
        </CartContainer>
    );
}

export default Cart;