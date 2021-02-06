import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {removeItem, updateQuantity} from "../actions";


const CartItem = ({id, name,quantity}) =>{
    const dispatch = useDispatch();
    const [currentQty, setQty] = useState(quantity);

    return <Wrapper>
        <Product>
            <div>{name}</div>
            <Close onClick={()=>dispatch(removeItem({id}))}>x</Close>
        </Product>
        <QuantityBox>
            <div>Quantity: </div>
            <Quantity 
                type='text' 
                value={quantity} 
                onInput={(ev)=>{
                        dispatch(updateQuantity(id, parseInt(ev.target.value)));
                    console.log(ev.target.value);
                }}
                />
        </QuantityBox>
    </Wrapper>
};
const Quantity=styled.input`
    width: 33px;
    border-bottom: 3px solid white;
    text-align:center;
    color: white;
    font-weight: bold;
    margin: 0 5px;
    padding:0;
    background-color: transparent;
`;
const QuantityBox = styled.div`
    font-size: 18px;
    display:flex;
    flex-direction: row;
    padding:10px 14px;
    color: lightgray;
    background-color:rgba(0, 0, 0, 0.25);
    align-items: center;
`;
const Close=styled.div`
    background-color: transparent;
    outline: none;
    &:hover{
        cursor: pointer;
    }
`;
const Product= styled.div`
    padding: 14px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Wrapper = styled.div`
    font-family: 'Fredoka One';
    font-size: 22px;
    list-style: none;
    padding: 0;
    margin:30px 0;
    width: 100%;
    display: flex;
    flex-direction:column;
    border: dashed 2px rgba(255, 255, 255, 0.1);
`;

export default CartItem;