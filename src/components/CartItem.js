import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { removeItem } from './actions';

const CartItem=({id, title, quantity})=>{
    // console.log(props.storeItems[0].title);
    const dispatch = useDispatch();
    return (
        <Wrapper id={id}>
            <Container>
                <span>{title}</span>
                <Button onClick={()=>{
                    dispatch(removeItem(id))
                }}>
                    <AiFillCloseCircle size={20} />
                </Button>
            </Container>
            
            <p>{quantity}</p>
        </Wrapper>
    )
};
const Wrapper=styled.div`
    color:white;
`;

const Container=styled.div`
    display:flex;
    justify-content:space-between;
`;

const Button=styled.button`
    margin-right:10px;
    border:none;
    outline:none;
    background:transparent;
    color:white;
    &:hover{
        cursor:pointer;
    }

`;

export default CartItem;