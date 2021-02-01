import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem'
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers' 

const Cart =()=>{
    const cartItems = useSelector(getStoreItemArray);

    let totalPrice = 0;
    cartItems.forEach((item)=>{
        return totalPrice += item.price * item.quantity;
    })
    const formattedTotalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice / 100);

    // console.log(cartItems);

    return (
        <Wrapper>
            <Top>
                <Title>Your Cart</Title>
                <Subtitle>{cartItems.length} items</Subtitle>
                <List>
                    {cartItems && cartItems.map((item)=>{
                        return <CartItem 
                            key= {item.id} 
                            id= {item.id}
                            quantity={item.quantity} 
                            title={item.title}
                        />
                    })}
                </List>
            </Top>
            <Bottom>
                <Total>Total: {formattedTotalPrice}</Total>
                <Button>Purchase</Button>
            </Bottom>
        </Wrapper>
    );
};

const Wrapper= styled.div`
position: sticky;
top: 0px;
min-width: 300px;
height: 100vh;
background: rgb(64, 31, 67);
color: white;
padding-top: 16px;
padding-bottom: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Top = styled.div`
padding-left: 32px;
padding-right: 32px;
`;

const Title = styled.h2`
color: white;
font-size: 24px;
font-weight: bold;
margin-bottom: 0px;
`;

const Subtitle = styled.div`
margin: 8px 0px 0px;
font-size: 16px;
opacity: 0.75;
`;

const List = styled.ul`
list-style-type: none;
`;

const Bottom = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding-bottom: 64px;
padding-left: 32px;
padding-right: 32px;
`;

const Total = styled.div`
font-size: 22px;
`;

const Button = styled.button`
outline:none;
width: 140px;
position: relative;
display: block;
border-radius: 12px;
background: rgb(255, 64, 110);
color: white;
border: none;
padding: 8px;
font-size: 16px;
font-weight: 600;
cursor: pointer;
`;

export default Cart; 