import styled from '@emotion/styled';
import theme from '../../theme-config';

const Navbar = styled('header')`
  label: navbar;
  background-color: ${theme.secondary};
  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 10px 0;
`;
const HeaderWrapper = styled('div')`
  label: header-wrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinksWrapper = styled('div')`
  label: links-wrapper;
  @media (max-width: 1199px) {
    & {
      position: absolute;
      right: 0;
      padding-right: 5px;
      padding-left: 5px;
      top: 45px;
      width: 300px;
      max-width: 100%;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
    }
    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const NavbarList = styled('ul')`
  label: navbar-list;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  @media (max-width: 1199px) {
    & {
      padding: 10px 0;
      background: rgba(0, 0, 0, 0.523);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      flex-direction: column;
      align-items: stretch;
      text-align: center;
    }
  }
`;
const NavbarLink = styled('a')`
  label: navbar-link;
  display: block;
  padding: 0.5rem;
  color: ${theme.white};
  cursor: pointer;
  transition: 0.3s;
  &:hover,
  &.active {
    color: ${theme.active};
  }
`;
const BrandLink = styled('a')`
  label: brand-link;
  display: flex;
  gap: 10px;
  font-weight: bold;
  color: ${theme.white};
  font-size: 30px;
  & span {
    color: ${theme.primary};
  }
`;
const ToggleMenuBtn = styled('button')`
  label: toggle-menu-btn;
  border: 0;
  background-color: transparent;
  outline: none;
  display: none;
  cursor: pointer;
  @media (max-width: 1199px) {
    & {
      display: block;
    }
  }
`;
export {
  HeaderWrapper,
  Navbar,
  NavbarList,
  NavbarLink,
  BrandLink,
  ToggleMenuBtn,
  LinksWrapper,
};
