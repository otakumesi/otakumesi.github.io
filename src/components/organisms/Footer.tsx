import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 10px 30px;
`;

const CopyRight = styled.div`
  text-align: center;
`;

const Footer: React.SFC = () =>
  <FooterWrapper>
    <CopyRight>
    © 2018 otakumesi
    </CopyRight>
  </FooterWrapper>

export default Footer;
