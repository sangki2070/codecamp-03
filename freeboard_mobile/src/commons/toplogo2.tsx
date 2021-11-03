import React from 'react';

import styled from '@emotion/native';

const LogoWrapper = styled.View`
  width: 320;
  height: 40;
  /* padding-right: 30; */
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

const CartWrapper = styled.View`
  /* flex: 1; */
`;

const EmptyView = styled.View``;

import Sleepy from '../../public/navigation/Sleepy.svg';
import Cart from '../../public/navigation/Cart.svg';

const TopLogo2 = () => {
  return (
    <LogoWrapper>
      <EmptyView></EmptyView>
      <Sleepy style={{}} />
      <CartWrapper>
        <Cart style={{}} />
      </CartWrapper>
    </LogoWrapper>
  );
};

export default TopLogo2;
