import React from "react";
import styled from "styled-components";

const HeaderWrapper = () => {
  return (
    <HeaderContainer>
      <h3>Your Cart</h3>
      <p>0 item</p>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin-bottom: 3rem;
`;

export default HeaderWrapper;
