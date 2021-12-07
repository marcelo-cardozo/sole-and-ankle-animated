import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {REDUCED_MOTION, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink position={1} href="/sale">Sale</NavLink>
          <NavLink position={2} href="/new">New&nbsp;Releases</NavLink>
          <NavLink position={3} href="/men">Men</NavLink>
          <NavLink position={4} href="/women">Women</NavLink>
          <NavLink position={5} href="/kids">Kids</NavLink>
          <NavLink position={6} href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink position={7} href="/terms">Terms and Conditions</SubLink>
          <SubLink position={8} href="/privacy">Privacy Policy</SubLink>
          <SubLink position={9} href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0%);
  }
`

const closingDoor = keyframes`
  from {
    transform: perspective(1100px) rotateY(-90deg);
  }
  to {
    transform: perspective(1100px) rotateY(0deg);
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 600ms ease-out forwards;
  
  @media ${REDUCED_MOTION.NO_PREFERENCE} {
    animation-duration: 400ms;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  
  @media ${REDUCED_MOTION.NO_PREFERENCE} {
    transform-origin: 100% 50%;
    animation: ${closingDoor} 500ms ease-out both;
    animation-delay: 300ms;
    
    & > * {
      animation: ${fadeIn} 300ms ease-in-out both;
      animation-delay: 500ms;
    }  
  } 
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;



const Link = styled.a`
  text-decoration: none;

  @media ${REDUCED_MOTION.NO_PREFERENCE} {
    animation: ${slideIn} 500ms both ease-out;
    animation-delay: ${({position}) => 700 + position * 60}ms
  }
`

const NavLink = styled(Link)`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled(Link)`
  color: var(--color-gray-700);
  font-size: 0.875rem;
`;

export default MobileMenu;
