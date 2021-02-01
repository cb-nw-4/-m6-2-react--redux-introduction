import React from 'react';
import styled from 'styled-components';

const CartItem = () => {
  return (
    <Wrapper>
      <ItemName>
        <div>Hello</div>
        <div><Button>x</Button></div>
      </ItemName>
      <ItemQuantity>
        Quantity:
        <Form>
          <Input type="text" maxLength="2" />
        </Form>
      </ItemQuantity>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  margin-top: 40px;
  padding-bottom: 1px;
  border: 2px dashed rgba(242, 193, 229, 0.3)
`;

const ItemName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
  border: none;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  padding-left: 10px;
  font-size: 1.3rem;
  background-color: #301732;
`;

const Form = styled.form`
  padding-left: 10px;
`;

const Input = styled.input`
  width: 25px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
`;

export default CartItem;
