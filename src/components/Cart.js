import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import CartItem from './CartItem';
import { getStoreItemArray } from '../reducers';


const Cart = ()=>{
    const storeItems = useSelector(getStoreItemArray);
    console.log(storeItems.length)
    const calculateTotalPrice = ()=>{
        const totalPrice = storeItems.reduce((a,b)=>{
            return a + b.price/100 * b.quantity;
        }, 0);
        return parseFloat(totalPrice).toFixed(2);
    };


    return (
        <Wrapper>
            <Title>Your Cart</Title>
            <Item>{storeItems.length} items</Item>
            <ItemWrapper>
            {storeItems.map((item)=>{
                return <CartItem
                         key={item.id}
                         id={item.id}
                         name={item.title}
                         quantity={item.quantity} 
                        />
            })}
            </ItemWrapper>
            <Bottom>
                <PriceWrapper>
                    <SubTitle>Total:</SubTitle>
                    <h3>{`$${calculateTotalPrice()}`}</h3>
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
