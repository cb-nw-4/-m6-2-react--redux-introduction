import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';
import UnstyledButton from './UnstyledButton';
import {removeItem} from "../actions";


const CartItem = ({item}) => {

    const dispatch = useDispatch();

    return ( <Wrapper> 

        <Header>

            <h2>{item.title}</h2>
            
            <Button onClick={() => 
                dispatch(removeItem(item))}
            >
                <AiOutlineClose  size= '20px'/>
            </Button>
        </Header>


        <div> 
            Quantity: 
            <Input
            id="quality" 
            value={item.quality} 
            //onChange={(ev) => updateField('creditCard', ev.target.value)}
            
            />  
        </div>

        </Wrapper> );
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-style: dashed;
    padding: 0 20px 10px 20px;

    margin-top: 10px;

`
const Header= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

const Input = styled.input`
    width: 40px;
    margin-left: 10px; 
`

const Button = styled(UnstyledButton)`

`


export default CartItem;