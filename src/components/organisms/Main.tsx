import * as React from 'react';
import styled from 'styled-components';
import Profile from '../molecules/Profile';
import ContentWrapper from './shared/ContentWrapper';

const MainWrapper = styled(ContentWrapper)`
  padding: 0 10px;
`;

const Main: React.SFC = () =>
  <MainWrapper>
    <Profile />
  </MainWrapper>

export default Main;
