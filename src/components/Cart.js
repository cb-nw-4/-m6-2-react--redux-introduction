import React from 'react';
import {useSelector} from 'react-redux';

import CartItem from './CartItem';
import styled from 'styled-components';

import { getStoreItemArray } from "../reducers";
import Button from './Button';


const Cart = () => {

    const state = useSelector(getStoreItemArray)



    console.log(state)
    let totalPrice = 0; 
    
    return (
        <Wrapper>

            <h1>
                Your Cart
            </h1>

            <h3> {state.length} Item </h3>

            {state.map(item => {

                {totalPrice+= item.price}

                return <CartItem key= {item.id} item={item}/> 

            }
            )}

            <DivFooter>
                
                Total: <strong>${totalPrice/100}</strong>    

                <Button style={{width: '120px'}}>Purchase</Button>
            </DivFooter>    


        </Wrapper>
    );
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const DivFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px;

`

export default Cart;