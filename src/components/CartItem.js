import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeItem,  updateQuantity } from '../actions';

import UnstyledButton from './UnstyledButton';


const CartItem = ({id, name, quantity}) =>{
    const dispatch = useDispatch();   

    const handleChange = (ev)=>{
        const quantity = parseInt(ev.target.value);
        if (!isNaN(quantity) && quantity >= 0)
            dispatch(updateQuantity(quantity, id));
    };
    return (
    <Wrapper>
            <TopWrapper>
                <SubTitle>
                    {name} 
                </SubTitle>
                <UnstyledButton
                    onClick={()=>dispatch(removeItem(id))}
                >X</UnstyledButton>
            </TopWrapper>            
            <Quantity>
                 Quantity: <Input type='text' value={quantity} onChange={(ev)=>handleChange(ev)}/> 
            </Quantity>
      
    </Wrapper>);
};

const Wrapper = styled.div`  
    width: 100%;
    border: dashed 2px #543656;
    margin: 30px 0;       
`;

const TopWrapper = styled.div`
   display: flex;
   justify-content: space-between;  
   padding:  15px 15px;
`;

const SubTitle = styled.div` 
    font-size: 20px;
`;

const Quantity = styled.div`    
    background-color: #301732;
    color: #CCCCCC;
    padding: 12px 15px;
    font-size: 18px;  
`;

const Input = styled.input`
    margin-left: 5px;  
    font-weight: bold;
    font-size: 18px;  
    text-align: center;
    background-color: transparent;
    width: 40px;
    color: white;
    border: none;
    border-bottom: 3px solid white;
`;

export default CartItem;