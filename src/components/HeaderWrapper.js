import React from "react";
import styled from "styled-components";
import { getStoreItemArray } from "../reducers/index";
import {useSelector} from 'react-redux'

const HeaderWrapper = () => {
  const currentState = useSelector(getStoreItemArray)
  const amountOfItems = currentState.length
  return (
    <HeaderContainer>
      <h3>Your Cart</h3>
      <div onChange={() => currentState}>{amountOfItems} Items</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin-bottom: 3rem;
`;

export default HeaderWrapper;
