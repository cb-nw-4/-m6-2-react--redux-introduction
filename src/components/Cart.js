import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';

const Cart=()=>{
    const state = useSelector(state => state);
    console.log(state);
    const storeItems = useSelector(getStoreItemArray);
    console.log(storeItems);
    return(
        <>
        {state ? <Wrapper id="cart">
            {storeItems.map(elem=>{
                return(
                    <p>{elem.title}</p>
                )
            })}
        </Wrapper> : null}
        </>
    )
};

const Wrapper=styled.div`
`;

export default Cart;