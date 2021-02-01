import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/ikons/close'
import { removeItem, updateQuantity } from '../actions';
import { useDispatch } from 'react-redux';


const CartItem =({ id ,quantity, title })=>{
    const dispatch = useDispatch();

    return(
        <Wrapper>
            <Item>{title}
                <Button
                    onClick={()=> 
                        dispatch(removeItem({id}))
                    }
                >
                    <Icon icon={close}/>
                </Button>
            </Item>
            <Quantity>
                Quantity: 
                <Input 
                    value={quantity}
                    onChange={(e)=> 
                        dispatch(updateQuantity({id, quantity: e.target.value}))
                    }
                />
            </Quantity>
        </Wrapper>
    );
}; 

const Wrapper = styled.div`
border: 2px dashed rgba(255, 255, 255, 0.1);
margin-top:10px;
margin-left: -40px;
color: white;
`;

const Item = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 21px;
font-weight: 500;
padding: 8px 16px;
`;

const Button = styled.div`
display: block;
margin: 0px;
border: none;
background: transparent;
cursor: pointer;
text-align: left;
font: inherit;
color: inherit;
padding: 8px 0px;
`;

const Quantity = styled.div`
font-size: 17px;
color: rgb(204, 204, 204);
background: rgba(0, 0, 0, 0.25);
padding: 8px 16px;
`;

const Input = styled.input`
background: transparent;
border: none;
border-bottom: 3px solid white;
width: 30px;
height: 30px;
color: white;
font-size: inherit;
padding: 4px;
text-align: center;
font-weight: bold;
`;

export default CartItem;