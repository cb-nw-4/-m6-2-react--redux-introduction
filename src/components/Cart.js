import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';
import CartItem from './CartItem';

const Cart=()=>{
    const state = useSelector(state => state);
    // console.log(state);
    const storeItems = useSelector(getStoreItemArray);
    const [totalItems, setTotalItems]=useState(0);
    const [totalPrice, setTotalPrice]=useState(0);
    // console.log(storeItems);
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
                <PurchaseButton onClick={ev=>ev.preventDefault()}>
                    Purchase
                </PurchaseButton>
            </Footer>
        </Wrapper>
    )
};

const Wrapper=styled.div`
    color:white;
    position:sticky;
    background-color:#3c1f41;
    min-width:250px;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    top:0;
    right:0;
`;

const Header=styled.div``;

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

const PurchaseButton=styled.button`
    border-radius: 12px;
    background: #ff406e;
    height:50px;
    width:100px;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    outline:none;
`;


export default Cart;