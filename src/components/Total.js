import React from 'react'
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const Total = () => {
  return (
    <TotalWrapper>
      <TotalPriceContainer>
        Total: $12.34
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
  margin-top: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default Total
