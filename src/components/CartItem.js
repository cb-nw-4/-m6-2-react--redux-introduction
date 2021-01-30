import React from 'react';
import styled from 'styled-components';

import UnstyledButton from './UnstyledButton';


const CartItem = ({name}) =>{
    console.log(name);
    return (
    <Wrapper>
            <TopWrapper>
                <SubTitle>
                    {name} 
                </SubTitle>
                <UnstyledButton>X</UnstyledButton>
            </TopWrapper>            
            <Quantity>
                 Quantity: <Span> 1 </Span>
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

const Span = styled.span`
    margin-left: 5px;
    padding: 2px 10px; 
    font-weight: bold;
    border-bottom: solid 3px white;
    color: white;
`;

export default CartItem;