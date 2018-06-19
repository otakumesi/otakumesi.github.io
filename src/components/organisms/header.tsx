import * as React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const MenuWrapper = styled.div`
`;

const HeaderWrapper = styled.header`
  padding: 20px 30px 15px;
  display: flex;
  justify-content: space-between;
`;

const Header: React.SFC = () =>
  <HeaderWrapper>
    <Logo />
    <MenuWrapper>
      test
    </MenuWrapper>
  </HeaderWrapper>

export default Header;
