/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { NavLink } from '../Header/Header'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss} isOpen={isOpen} >
      <Content>
        <CloseButtonWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
          </CloseButton>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButtonWrapper>
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(96, 100, 100, 0.8);
`

const Content = styled(DialogContent)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: 300px;
  background-color: ${COLORS.white};
  padding: 32px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
`

const CloseButtonWrapper = styled.div`
  align-self: flex-end;
  margin-top: -16px;
  margin-right: -16px;
`

const CloseButton = styled(UnstyledButton)`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${COLORS.gray[700]};
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export default MobileMenu;
