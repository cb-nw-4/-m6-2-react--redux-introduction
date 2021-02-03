import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { DeleteIcon } from './DeleteIcon';
import { removeItem, updateQuantity } from '../actions';


const CartItemWrapper = styled.div`
    border: 2px dashed RGB(110, 84, 133, 0.5);
    margin: 30px 15px;
`;

const StickerName = styled.div`
    color: white;
    font-size: 22px;
`;

const Discard = styled.button`
    color: white;
    font-size: 22px;
    background: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

const QuantityLabel = styled.label`
    color: white;
    opacity: 75%;
    font-size: 20px;
    margin-right: 5px;
`;

const QuantityInput = styled.input`
    color: white;
    font-size: 20px;
    text-align: center;
    width: 30px;
    background: transparent;
    border: none;
    border-bottom: 3px solid white;
`;

const CartItem = ({...item}) => {
    const dispatch = useDispatch();
    const id = item.id;
    const title = item.title;
    const price = item.price;
    const quantity = item.quantity;

    const previousQuantity = useRef(quantity);

    const handleInput = (value) => {
        const newQuantity = parseInt(value);
        if (Number.isInteger(newQuantity)) {
            dispatch(updateQuantity({id, title, price}, newQuantity));
        }
        else if (value === '') {
            dispatch(updateQuantity({id, title, price}, ''));
        }
    }

    useEffect(()=>{
        if (quantity) {
            previousQuantity.current = quantity;
        }
    }, [quantity]);

    return (
        <CartItemWrapper>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                <StickerName>{title}</StickerName>
                <Discard
                    onClick={() => {
                        dispatch(removeItem({ id }));
                    }}
                >
                    <DeleteIcon />
                </Discard>
            </div>
            <div style={{display: 'flex', background: '#330033', padding: '10px 20px'}}>
                <QuantityLabel htmlFor='quantity'>Quantity: </QuantityLabel>
                <QuantityInput 
                    id='quantity' 
                    value={quantity} 
                    onChange={(event) => {
                        handleInput(event.target.value);
                    }}
                    onBlur={() => {
                        handleInput(previousQuantity.current);
                    }}
                />
            </div>
            
        </CartItemWrapper>
    );
}

export default CartItem;