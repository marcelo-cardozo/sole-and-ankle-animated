import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES, REDUCED_MOTION, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

function NavLink({href, children}) {
  return (
    <NavLinkWrapper href={href}>
      <LinkFront>{children}</LinkFront>
      <LinkBack>{children}</LinkBack>
    </NavLinkWrapper>
  )
}

const NavLinkWrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const LinkFront = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.medium};
  transition: opacity 500ms ease-in;
  
  ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
  
  @media ${REDUCED_MOTION.NO_PREFERENCE} {
    backface-visibility: hidden;
    transition: transform 300ms ease-in;

    ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
      transform: translateY(-100%);
      transition: transform 100ms ease-out;
    }  
  }
`

const LinkBack = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  opacity: 0;
  transition: opacity 500ms ease-in;
  
  ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  
  @media ${REDUCED_MOTION.NO_PREFERENCE} {
    top: 100%;
    transition: transform 300ms ease-in;
    
    ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
      transform: translateY(-100%);
      transition: transform 100ms ease-out;
    }
  }
`

export default Header;
