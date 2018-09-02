import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderWrapepr = styled.header`
  border-top: 5px solid #FD6A02;
  border-bottom: 1px solid #ccc;
  max-height: 120px;
  width: 100%;
`

const HeaderInner = styled.div`
  padding: 10px 30px 15px;
  display: flex;
  justify-content: space-between;
`

const BrandSpace = styled.div`
  height: 95px;
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  font-size: 2.4em;
  text-decoration: none;
`

const ContentSpace = styled.div`
  height: 95px;
  display: flex;
  align-items: center;
`

const SocialIconList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > a + a {
    margin-left: 10px
  }
`

const BaseSocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: ${(props:SocialIconLinkProps) => props.bgColor || 'transparent'};
  color: ${(props:SocialIconLinkProps) => props.fontColor || '#000' };
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialIconLink:React.SFC<SocialIconLinkProps> = (props) => {
  return (
    <a href={props.url} target="_blank">
      <BaseSocialIcon {...props}>{props.children}</BaseSocialIcon>
    </a>
  )
}

const Header = () => {
  return(
    <HeaderWrapepr>
      <HeaderInner>
        <BrandSpace>
          <Logo href="/">otakumesi#IO</Logo>
        </BrandSpace>
        <ContentSpace>
        <SocialIconList>
          <SocialIconLink
            bgColor="#1da1f2"
            fontColor="#fff"
            url="https://twitter.com/otakumesi">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
          </SocialIconLink>
          <SocialIconLink
            bgColor="#3b5998"
            fontColor="#fff"
            url="https://www.facebook.com/takurou.niitsuma">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
          </SocialIconLink>
        </SocialIconList>
        </ContentSpace>
      </HeaderInner>
    </HeaderWrapepr>
  )
}

export default Header
