import * as React from 'react';
import styled from 'styled-components';
import Profile from '../molecules/Profile';
import ContentWrapper from './base/ContentWrapper';

const MainWrapper = styled(ContentWrapper)``;

const Main: React.SFC = () =>
  <MainWrapper>
    <Profile />
  </MainWrapper>

export default Main;
