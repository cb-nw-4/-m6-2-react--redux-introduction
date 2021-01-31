import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';
import CartItem from './CartItem';

const Cart=()=>{
    const state = useSelector(state => state);
    // console.log(state);
    const storeItems = useSelector(getStoreItemArray);
    // console.log(storeItems);
    return(
        <Wrapper>
            <p>You are purchasing {storeItems.length} item(s).</p>
            {storeItems.map((elem, index)=>{
                return (
                <CartItem 
                    key={elem.id+index}
                    id={elem.id}
                    title={elem.title}
                    quantity={elem.quantity}
                />)
            })}
        </Wrapper>
    )
};

const Wrapper=styled.div`
    color:white;
`;

export default Cart;