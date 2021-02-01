import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { removeItem, updateItem } from './actions';

const CartItem=({id, title, quantity})=>{
    // console.log(id, title, quantity);
    const dispatch = useDispatch();
    return (
        <Wrapper id={id}>
            <Container>
                <span>{title}</span>
                <Button onClick={()=>{
                    dispatch(removeItem(id))
                }}>
                    <AiFillCloseCircle size={20} />
                </Button>
            </Container>
            <div>
                <span>Quantity: {"  "}</span>
                <span>
                    <QuantityInput
                        value={quantity}
                        onChange={(ev)=>{
                            let itemQuantity=ev.target.value;
                            dispatch(updateItem({id:id, quantity:itemQuantity}));
                        }}
                    />
                </span>
            </div>
            
        </Wrapper>
    )
};
const Wrapper=styled.div`
    color:white;
    padding:5px;
    border: 1px dashed gray;
    margin: 10px 10px 10px 0;
`;

const Container=styled.div`
    display:flex;
    justify-content:space-between;
`;

const Button=styled.button`
    border:none;
    outline:none;
    background:transparent;
    color:white;
    &:hover{
        cursor:pointer;
    }

`;

const QuantityInput=styled.input`
    background:transparent;
    color:white;
    max-width:30px;
    border:0;
    border-bottom: 4px solid white;
    font-weight:bold;
    text-align:center;
`;

export default CartItem;