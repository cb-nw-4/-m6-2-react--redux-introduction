import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';
import CartItem from './CartItem';
import Button from './Button';

const Cart=()=>{
    const state = useSelector(state => state);
    const storeItems = useSelector(getStoreItemArray);
    const [totalItems, setTotalItems]=useState(0);
    const [totalPrice, setTotalPrice]=useState(0);
    useEffect(()=>{
        let tempQuant=0;
        let tempPrice=0
        storeItems.forEach(elem=>{
            tempQuant=tempQuant+elem.quantity;
            setTotalItems(tempQuant);
            tempPrice=tempPrice+(elem.quantity*elem.price);
            setTotalPrice(tempPrice);
        });
    console.log(totalItems);
    },[state]);
    
    return(
        <Wrapper>
            <Header>
                <Title>Your Cart</Title>
                <p>You are purchasing <strong>{totalItems}</strong> item(s).</p>
                {storeItems.map((elem, index)=>{
                    return (
                    <CartItem 
                        key={elem.id+index}
                        id={elem.id}
                        title={elem.title}
                        quantity={elem.quantity}
                    />)
                })}
            </Header>
            <Footer>
                <TotalAmount>
                    Price: ${totalPrice/100}
                </TotalAmount>
                <PurchasedButton onClick={ev=>ev.preventDefault()}>
                    Purchase
                </PurchasedButton>
            </Footer>
        </Wrapper>
    )
};

const Wrapper=styled.div`
    color:white;
    position:sticky;
    background-color:inherit;
    min-width:250px;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    top:0;
    right:0;
`;

const Header=styled.div`
    margin-bottom:5px;
`;

const Title=styled.h1`
    font-weight: normal;
    font-family: 'Fredoka One';
`;

const Footer=styled.div`
    bottom:5px;
    display:flex;
    justify-content:space-between;
    margin:10px;
`;

const TotalAmount=styled.p`
    font-family: 'Fredoka One';
    color:white;
`;

const PurchasedButton=styled(Button)`
    height:fit-content;
    width:100px;
`;


export default Cart;