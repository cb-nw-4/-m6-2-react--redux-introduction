import React from 'react'
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { getStoreItemArray } from "../reducers/index";
import {useSelector} from 'react-redux'


const Total = ({price}) => {
  const currentState = useSelector(getStoreItemArray)
  // console.log(currentState)
  const priceArray = currentState.map((item) => {
    return (
      item.price * item.quantity
    )
  })
  const totalPrice = priceArray.reduce((accum, curr) => {
    return accum + curr
  }, 0)

  return (
    <TotalWrapper>
      <TotalPriceContainer>
        Total: ${totalPrice}
      </TotalPriceContainer>
      <Button variant="contained" color="secondary">
        Purchase
      </Button>
    </TotalWrapper>
  )
}

const TotalPriceContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const TotalWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default Total
