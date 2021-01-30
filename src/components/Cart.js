import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CartItem from './CartItem';
import { STORE_ITEMS } from '../data';

const Cart = ()=>{
    return (
        <Wrapper>
            <Title>Your Cart</Title>
            <Item>0 items</Item>
            <ItemWrapper>
            {STORE_ITEMS.map((item)=>{
                return <CartItem
                         key={item.ide}
                         name={item.title} 
                        />
            })}
            </ItemWrapper>
            <Bottom>
                <PriceWrapper>
                    <SubTitle>Total:</SubTitle>
                    <h3>$12.45</h3>
                </PriceWrapper>
                <ButtonPurchase>Purchase</ButtonPurchase>
            </Bottom>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px 0px;
    color: white;   
    background-color: #401F43;
    min-width: 300px;
`;

const ItemWrapper = styled.div`
    padding: 0 15px;
    overflow: auto;
`;

const PriceWrapper = styled.div`
    display: flex;
`;

const Item = styled.p`
    margin: 5px 30px;
    color: #CCCCCC;
`;

const Title = styled.h2`
    margin-bottom: 0;   
    margin: 0px 30px; 
`;

const SubTitle = styled.h3`
    font-weight: normal;
    margin-right: 5px;    
`;

const ButtonPurchase = styled(Button)`
    width: 150px;

`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 30px;
    margin-top:auto;
`;

export default Cart;
