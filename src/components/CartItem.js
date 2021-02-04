import React from "react";
import styled from 'styled-components';
import UnstyledButton from './UnstyledButton';

const CartItem = () => {

    return(
        <ItemPanel>
            <ItemSelected>
                <ItemName>Name</ItemName>
                <RemoveButton>✕</RemoveButton>
            </ItemSelected>
            <QuantityBox>
                <p>Quantity: </p>
                <input></input>
            </QuantityBox>
        </ItemPanel>
    )
};

const ItemPanel = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px #533656 dashed;
    margin: 30px 15px;
    line-height: 0;
`;

const ItemSelected = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 8px 15px;
`;

const ItemName = styled.p`
    font-size: 22px;
`;

const RemoveButton = styled(UnstyledButton)`
    border: none;
`;

const QuantityBox = styled.div`
    display: flex;
    margin: 0;
    padding: 8px 15px;
    background-color: #301732;
    font-size: 17px;

    & p {
        color: lightgray;
    }

    & input {
        margin-left: 10px;
        width: 35px;
        height: 35px;
        border: none;
        border-bottom: 3px white solid;     
        text-align: center;   
        background-color: transparent;
        color: white;
        font-weight: bold;
        font-size: inherit;
    }
`;

export default CartItem;