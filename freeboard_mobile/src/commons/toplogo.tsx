import React from 'react';

import styled from '@emotion/native';

const LogoWrapper = styled.View`
  width: 380;
  height: 40;
  /* padding-right: 30; */
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

import Sleepy from '../../public/navigation/Sleepy.svg';
import Cart from '../../public/navigation/Cart.svg';

const TopLogo = () => {
  return (
    <LogoWrapper>
      <Sleepy style={{}} />
      <Cart />
    </LogoWrapper>
  );
};

export default TopLogo;
