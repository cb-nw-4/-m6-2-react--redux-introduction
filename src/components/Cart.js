import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import CartItem from './CartItem';
import styled from 'styled-components';

import { getStoreItemArray } from "../reducers";
import {formattedPrice} from "../helpers";
import {clearCart} from '../actions';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import Button from './Button';




const Cart = () => {

    const state = useSelector(getStoreItemArray);
    const [tax, settax] = useState(0);

    const dispatch = useDispatch();

    let totalPrice = 0; 

    const handleChange =(event) =>{
        settax(parseInt(event.target.value));
        console.log('event', tax);
    }
    
    return (
        <Wrapper>

            <Button style={{backgroundColor: '#FF8C00', color:"#8B0000", opacity: "0.7"}} onClick={() =>{ 
                const itemsClear = [...state]
                dispatch(clearCart(itemsClear))}
            } >Clear cart</Button>

            <h1>
                Your Cart
            </h1>

            <h3> {state.length} Item </h3>

            {state.map(item => {

                {totalPrice+= item.price * item.quantity * (1+ tax/100)}

                return <CartItem key= {item.id} item={item}/> 
            }
            )}

            <FormControl style={{margin:'80px 10px'}}>
                <InputLabel style={{color:'white'}}
                        id="tax-select-label">Sales tax</InputLabel>
                <Select
                    style={{color:'white'}}
                    labelId="taxselect-label"
                    id="tax-select"
                    value={tax}
                    onChange={handleChange}
                >
                    <MenuItem value={5}>Alberta</MenuItem>
                    <MenuItem value={12}>British Columbia</MenuItem>
                    <MenuItem value={12}>Manitoba</MenuItem>
                    <MenuItem value={15}>New-Bruinswick</MenuItem>
                    <MenuItem value={12}>Newfoundland/Labrador</MenuItem>
                    <MenuItem value={5}>Northwest Territories</MenuItem>
                    <MenuItem value={15}>Nova Scotia</MenuItem>
                    <MenuItem value={5}>Nunavut</MenuItem>
                    <MenuItem value={13}>Ontario</MenuItem>
                    <MenuItem value={15}>PEI</MenuItem>
                    <MenuItem value={14.975}>Quebec</MenuItem>
                    <MenuItem value={11}>Saskatchewan</MenuItem>
                    <MenuItem value={5}>Yukon</MenuItem>
                    
                </Select>


            </FormControl>

            <DivFooter>    
                Total: {formattedPrice(totalPrice)} 

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